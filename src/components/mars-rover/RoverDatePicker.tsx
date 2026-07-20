import styles from './RoverDatePicker.module.css'

interface RoverDatePickerProps {
  value: string
  onChange: (date: string) => void
  min: string
  max: string
}

function RoverDatePicker({ value, onChange, min, max }: RoverDatePickerProps) {
  return (
    <input
      type="date"
      className={styles.dateInput}
      value={value}
      min={min}
      max={max}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default RoverDatePicker
