import { useState } from 'react'
import { useApod } from '../../hooks/useApod'
import styles from './ApodCard.module.css'

const MIN_DATE = '1995-06-16'

function getToday() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function ApodCard() {
  const today = getToday()
  const [date, setDate] = useState(today)
  const { data, isLoading, isError, error } = useApod(date)

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>Astronomy Picture of the Day</h2>
        <input
          type="date"
          className={styles.dateInput}
          value={date}
          min={MIN_DATE}
          max={today}
          onChange={(event) => setDate(event.target.value)}
        />
      </header>

      {isLoading && <p className={styles.status}>Cargando...</p>}

      {isError && (
        <p className={`${styles.status} ${styles.statusError}`}>
          No se pudo cargar la imagen: {error instanceof Error ? error.message : 'Error desconocido'}
        </p>
      )}

      {data && (
        <div className={styles.content}>
          {data.media_type === 'image' ? (
            <img className={styles.media} src={data.url} alt={data.title} />
          ) : (
            <iframe
              className={styles.media}
              src={data.url}
              title={data.title}
              allowFullScreen
            />
          )}
          <h3 className={styles.itemTitle}>{data.title}</h3>
          {data.copyright && <p className={styles.copyright}>© {data.copyright}</p>}
          <p className={styles.explanation}>{data.explanation}</p>
        </div>
      )}
    </article>
  )
}

export default ApodCard
