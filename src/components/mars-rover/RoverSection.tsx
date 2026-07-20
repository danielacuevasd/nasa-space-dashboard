import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import RoverSelector from './RoverSelector'
import RoverDatePicker from './RoverDatePicker'
import PhotoGrid, { PhotoGridSkeleton } from './PhotoGrid'
import ErrorMessage from '../shared/ErrorMessage'
import { useMarsRoverPhotos } from '../../hooks/useMarsRoverPhotos'
import type { RoverName } from '../../types/marsRover'
import styles from './RoverSection.module.css'

const ROVER_LANDING_DATES: Record<RoverName, string> = {
  curiosity: '2012-08-06',
  perseverance: '2021-02-18',
}

function getToday() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function RoverSection() {
  const today = getToday()
  const [rover, setRover] = useState<RoverName>('curiosity')
  const [earthDate, setEarthDate] = useState(today)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const { data: photos, isLoading, isError, error } = useMarsRoverPhotos(rover, earthDate)

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Mars Rover Photos</h2>
        <div className={styles.controls}>
          <RoverSelector value={rover} onChange={setRover} />
          <RoverDatePicker
            value={earthDate}
            onChange={setEarthDate}
            min={ROVER_LANDING_DATES[rover]}
            max={today}
          />
        </div>
      </header>

      {isLoading && <PhotoGridSkeleton />}

      {isError && (
        <ErrorMessage
          message={`No se pudieron cargar las fotos: ${error instanceof Error ? error.message : 'Error desconocido'}`}
        />
      )}

      {photos && photos.length === 0 && (
        <p className={styles.empty}>
          No hay fotos disponibles para esta fecha. Prueba con otra fecha.
        </p>
      )}

      {photos && photos.length > 0 && (
        <PhotoGrid photos={photos} onPhotoClick={setLightboxIndex} />
      )}

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex ?? 0}
        slides={(photos ?? []).map((photo) => ({
          src: photo.img_src,
          alt: `Foto de ${photo.rover.name} tomada por la cámara ${photo.camera.full_name}`,
        }))}
      />
    </section>
  )
}

export default RoverSection
