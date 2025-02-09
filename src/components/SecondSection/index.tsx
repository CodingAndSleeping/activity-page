import { FC, useEffect, useRef, useState } from 'react'

import cn from 'classnames'

import CartoonImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import FoodImage from '../../assets/food.jpg'
import LifeImage from '../../assets/life.jpg'
import LogoImage from '../../assets/logo.png'

import styles from './index.module.scss'

const tabs = [
  {
    key: 'carton',
    title: '动画',
    img: CartoonImage,
  },
  {
    key: 'food',
    title: '美食',
    img: FoodImage,
  },
  {
    key: 'movie',
    title: '电影',
    img: MovieImage,
  },
  {
    key: 'life',
    title: '生活',
    img: LifeImage,
  },
]

const TAB_HEIGHT = 50

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('carton')

  const [fixed, setFixed] = useState<boolean>(false)

  const secondSectionRef = useRef<HTMLDivElement>(null)

  const activate = (key: string) => {
    setActiveTab(key)
    // 找到对应的元素
    const activeElement = document.querySelector(`section[data-id="${key}"]`)
    if (activeElement) {
      // 滚动到视图的中间
      activeElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect()
      setFixed(top <= 0)

      // 找到所有section
      const sectionNodes = secondSectionRef.current.querySelectorAll('section')

      // 遍历section，依次设置top小于等于TAB_HEIGHT的section，设置activeTab
      Array.from(sectionNodes).forEach(sectionElement => {
        const { top } = sectionElement.getBoundingClientRect()
        const key = sectionElement.getAttribute('data-id') || ''
        if (top <= TAB_HEIGHT) {
          setActiveTab(key)
        }
      })
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={styles['second-section']} ref={secondSectionRef}>
      {/* tabs */}
      <ul className={cn({ [styles.fixed]: fixed })}>
        {tabs.map(tab => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={cn(styles.active, {
                [styles.visible]: activeTab === tab.key,
              })}
            />
          </li>
        ))}
      </ul>

      {/* content */}
      <div>
        {tabs.map(tab => (
          <section key={tab.key} data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.img} alt={tab.title} />
          </section>
        ))}
      </div>

      {/* 吸底按钮 */}
      <div className={cn(styles['btn-wrapper'], { [styles.visible]: fixed })}>
        <img src={LogoImage} alt='bilibili' />
        <a href='https://www.bilibili.com/' target='_blank'>
          <button className={styles.btn}>APP 内打开</button>
        </a>
      </div>
    </div>
  )
}
export default SecondSection
