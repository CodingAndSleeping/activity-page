import { FC } from 'react'
import CartoonImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import FoodImage from '../../assets/food.jpg'
import LifeImage from '../../assets/life.jpg'

import styles from './index.module.scss'

const SecondSection: FC = () => {
  return (
    <div className={styles['second-section']}>
      {/* tabs */}
      <ul>
        <li>动画</li>
        <li>美食</li>
        <li>电影</li>
        <li>生活</li>
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
