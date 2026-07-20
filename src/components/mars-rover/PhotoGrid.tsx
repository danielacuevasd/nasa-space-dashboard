import PhotoCard from './PhotoCard'
import type { MarsRoverPhoto } from '../../types/marsRover'
import styles from './PhotoGrid.module.css'

interface PhotoGridProps {
  photos: MarsRoverPhoto[]
  onPhotoClick: (index: number) => void
}

function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <div className={styles.grid}>
      {photos.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} onClick={() => onPhotoClick(index)} />
      ))}
    </div>
  )
}

export default PhotoGrid

const SKELETON_PLACEHOLDER_COUNT = 8

export function PhotoGridSkeleton() {
  return (
    <div className={styles.grid} aria-hidden="true">
      {Array.from({ length: SKELETON_PLACEHOLDER_COUNT }).map((_, index) => (
        <div key={index} className={styles.skeletonCard} />
      ))}
    </div>
  )
}
