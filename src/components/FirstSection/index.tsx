import { FC } from 'react'
import BannerImage from '../../assets/banner.jpg'
import styles from './index.module.scss'
const FirstSection: FC = () => {
  return (
    <div className={styles['first-section']}>
      <img src={BannerImage} alt='Banner' />
    </div>
  )
}

export default FirstSection
