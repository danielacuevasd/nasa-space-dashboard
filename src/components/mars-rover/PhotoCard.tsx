import type { MarsRoverPhoto } from '../../types/marsRover'
import styles from './PhotoCard.module.css'

interface PhotoCardProps {
  photo: MarsRoverPhoto
  onClick: () => void
}

function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <button type="button" className={styles.card} onClick={onClick}>
      <img
        className={styles.image}
        src={photo.img_src}
        alt={`Foto de ${photo.rover.name} tomada por la cámara ${photo.camera.full_name}`}
        loading="lazy"
      />
      <span className={styles.camera}>{photo.camera.name}</span>
    </button>
  )
}

export default PhotoCard
