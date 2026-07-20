import type { RoverName } from '../../types/marsRover'
import styles from './RoverSelector.module.css'

interface RoverSelectorProps {
  value: RoverName
  onChange: (rover: RoverName) => void
}

const ROVERS: { value: RoverName; label: string }[] = [
  { value: 'curiosity', label: 'Curiosity' },
  { value: 'perseverance', label: 'Perseverance' },
]

function RoverSelector({ value, onChange }: RoverSelectorProps) {
  return (
    <div className={styles.group} role="group" aria-label="Selección de rover">
      {ROVERS.map((rover) => (
        <button
          key={rover.value}
          type="button"
          className={`${styles.option} ${value === rover.value ? styles.optionActive : ''}`}
          onClick={() => onChange(rover.value)}
        >
          {rover.label}
        </button>
      ))}
    </div>
  )
}

export default RoverSelector
