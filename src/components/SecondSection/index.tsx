import { FC, useState } from 'react'

import cn from 'classnames'

import CartoonImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import FoodImage from '../../assets/food.jpg'
import LifeImage from '../../assets/life.jpg'

import styles from './index.module.scss'

const tabs = [
  {
    key: 'carton',
    title: '动画',
  },
  {
    key: 'food',
    title: '美食',
  },
  {
    key: 'movie',
    title: '电影',
  },
  {
    key: 'life',
    title: '生活',
  },
]

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState('carton')

  return (
    <div className={styles['second-section']}>
      {/* tabs */}
      <ul>
        {tabs.map(tab => (
          <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
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
        <section>
          <h2>动画</h2>
          <img src={CartoonImage} alt='cartoon' />
        </section>

        <section>
          <h2>电影</h2>
          <img src={MovieImage} alt='movie' />
        </section>

        <section>
          <h2>美食</h2>
          <img src={FoodImage} alt='food' />
        </section>

        <section>
          <h2>生活</h2>
          <img src={LifeImage} alt='life' />
        </section>
      </div>
    </div>
  )
}
export default SecondSection
