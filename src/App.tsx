import ApodCard from './components/apod/ApodCard'
import RoverSection from './components/mars-rover/RoverSection'
import NeoSection from './components/neows/NeoSection'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.app}>
      <ApodCard />
      <RoverSection />
      <NeoSection />
    </main>
  )
}

export default App
