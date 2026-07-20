import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { colors } from '../../styles/tokens'
import type { NearEarthObject } from '../../types/neows'
import styles from './NeoTimeline.module.css'

interface NeoTimelineProps {
  asteroids: NearEarthObject[]
}

interface TooltipPayloadEntry {
  payload: NearEarthObject
}

interface NeoTimelineTooltipProps {
  active?: boolean
  payload?: TooltipPayloadEntry[]
}

function NeoTimelineTooltip({ active, payload }: NeoTimelineTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null
  }

  const asteroid = payload[0].payload

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipName}>{asteroid.name}</p>
      <p className={styles.tooltipDistance}>{asteroid.missDistanceLunar.toFixed(2)} LD</p>
      {asteroid.isPotentiallyHazardous && (
        <p className={styles.tooltipHazard}>Potencialmente peligroso</p>
      )}
    </div>
  )
}

function NeoTimeline({ asteroids }: NeoTimelineProps) {
  const normalAsteroids = asteroids.filter((asteroid) => !asteroid.isPotentiallyHazardous)
  const hazardousAsteroids = asteroids.filter((asteroid) => asteroid.isPotentiallyHazardous)

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={320}>
        <ScatterChart margin={{ top: 16, right: 16, bottom: 8, left: 8 }}>
          <CartesianGrid stroke={colors.border.subtle} strokeDasharray="4 4" />
          <XAxis
            dataKey="approachDate"
            type="category"
            allowDuplicatedCategory={false}
            stroke={colors.text.secondary}
            tick={{ fill: colors.text.secondary, fontSize: 12 }}
          />
          <YAxis
            dataKey="missDistanceLunar"
            type="number"
            name="Distancia lunar"
            unit=" LD"
            stroke={colors.text.secondary}
            tick={{ fill: colors.text.secondary, fontSize: 12 }}
          />
          <Tooltip content={<NeoTimelineTooltip />} cursor={{ stroke: colors.border.accent }} />
          <Legend wrapperStyle={{ color: colors.text.secondary, fontSize: 12 }} />
          <Scatter name="Asteroides" data={normalAsteroids} fill={colors.accent.cyan} />
          <Scatter
            name="Potencialmente peligrosos"
            data={hazardousAsteroids}
            fill={colors.semantic.danger}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NeoTimeline

export function NeoTimelineSkeleton() {
  return <div className={`${styles.chart} ${styles.skeleton}`} aria-hidden="true" />
}
