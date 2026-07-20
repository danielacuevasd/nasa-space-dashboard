import type { NearEarthObject } from '../../types/neows'
import styles from './NeoCard.module.css'

interface NeoCardProps {
  asteroid: NearEarthObject
}

function NeoCard({ asteroid }: NeoCardProps) {
  return (
    <article className={`${styles.card} ${asteroid.isPotentiallyHazardous ? styles.hazardous : ''}`}>
      <header className={styles.header}>
        <h3 className={styles.name}>{asteroid.name}</h3>
        {asteroid.isPotentiallyHazardous && (
          <span className={styles.badge}>Potencialmente peligroso</span>
        )}
      </header>
      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Fecha de aproximación</dt>
          <dd>{asteroid.approachDate}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Diámetro estimado</dt>
          <dd>
            {Math.round(asteroid.estimatedDiameterMinMeters)}–
            {Math.round(asteroid.estimatedDiameterMaxMeters)} m
          </dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Velocidad relativa</dt>
          <dd>{Math.round(asteroid.relativeVelocityKmPerHour).toLocaleString('es')} km/h</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Distancia de aproximación</dt>
          <dd>{asteroid.missDistanceLunar.toFixed(2)} distancias lunares</dd>
        </div>
      </dl>
    </article>
  )
}

export default NeoCard
