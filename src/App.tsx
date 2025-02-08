import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'

import styles from './styles.module.scss'
function App() {
  return (
    <div className={styles.app}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default App
