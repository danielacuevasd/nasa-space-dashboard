import ApodCard from './components/apod/ApodCard'
import RoverSection from './components/mars-rover/RoverSection'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.app}>
      <ApodCard />
      <RoverSection />
    </main>
  )
}

export default App
