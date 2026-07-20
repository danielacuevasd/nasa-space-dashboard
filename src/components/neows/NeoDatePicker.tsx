import styles from './NeoDatePicker.module.css'

interface NeoDatePickerProps {
  value: string
  onChange: (date: string) => void
  max: string
}

function NeoDatePicker({ value, onChange, max }: NeoDatePickerProps) {
  return (
    <input
      type="date"
      className={styles.dateInput}
      value={value}
      max={max}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default NeoDatePicker
