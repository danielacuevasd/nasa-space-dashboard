import { useState } from 'react'
import NeoDatePicker from './NeoDatePicker'
import NeoTimeline, { NeoTimelineSkeleton } from './NeoTimeline'
import NeoList, { NeoListSkeleton } from './NeoList'
import ErrorMessage from '../shared/ErrorMessage'
import { useNeoWs } from '../../hooks/useNeoWs'
import styles from './NeoSection.module.css'

function getToday() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function NeoSection() {
  const today = getToday()
  const [startDate, setStartDate] = useState(today)
  const { data: asteroids, isLoading, isError, error } = useNeoWs(startDate)

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Asteroides cercanos a la Tierra</h2>
        <NeoDatePicker value={startDate} onChange={setStartDate} max={today} />
      </header>

      {isLoading && (
        <>
          <NeoTimelineSkeleton />
          <NeoListSkeleton />
        </>
      )}

      {isError && (
        <ErrorMessage
          message={`No se pudieron cargar los asteroides: ${error instanceof Error ? error.message : 'Error desconocido'}`}
        />
      )}

      {asteroids && asteroids.length === 0 && (
        <p className={styles.empty}>
          No se encontraron asteroides cercanos para este rango de fechas. Prueba con otra fecha.
        </p>
      )}

      {asteroids && asteroids.length > 0 && (
        <>
          <NeoTimeline asteroids={asteroids} />
          <NeoList asteroids={asteroids} />
        </>
      )}
    </section>
  )
}

export default NeoSection
