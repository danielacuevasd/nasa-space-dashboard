import NeoCard from './NeoCard'
import type { NearEarthObject } from '../../types/neows'
import styles from './NeoList.module.css'

interface NeoListProps {
  asteroids: NearEarthObject[]
}

function NeoList({ asteroids }: NeoListProps) {
  return (
    <div className={styles.grid}>
      {asteroids.map((asteroid) => (
        <NeoCard key={asteroid.id} asteroid={asteroid} />
      ))}
    </div>
  )
}

export default NeoList

const SKELETON_PLACEHOLDER_COUNT = 6

export function NeoListSkeleton() {
  return (
    <div className={styles.grid} aria-hidden="true">
      {Array.from({ length: SKELETON_PLACEHOLDER_COUNT }).map((_, index) => (
        <div key={index} className={styles.skeletonCard} />
      ))}
    </div>
  )
}
