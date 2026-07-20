import type { NearEarthObject, NeoWsFeedResponse } from '../types/neows'

const FEED_RANGE_DAYS = 7

export function getFeedEndDate(startDate: string): string {
  const [year, month, day] = startDate.split('-').map(Number)
  const end = new Date(year, month - 1, day + FEED_RANGE_DAYS)
  const endYear = end.getFullYear()
  const endMonth = String(end.getMonth() + 1).padStart(2, '0')
  const endDay = String(end.getDate()).padStart(2, '0')
  return `${endYear}-${endMonth}-${endDay}`
}

export function flattenNeoWsFeed(feed: NeoWsFeedResponse): NearEarthObject[] {
  return Object.values(feed.near_earth_objects)
    .flat()
    .map((asteroid) => {
      const closeApproach = asteroid.close_approach_data[0]
      return {
        id: asteroid.id,
        name: asteroid.name,
        approachDate: closeApproach.close_approach_date,
        isPotentiallyHazardous: asteroid.is_potentially_hazardous_asteroid,
        missDistanceLunar: Number(closeApproach.miss_distance.lunar),
        relativeVelocityKmPerHour: Number(closeApproach.relative_velocity.kilometers_per_hour),
        estimatedDiameterMinMeters: asteroid.estimated_diameter.meters.estimated_diameter_min,
        estimatedDiameterMaxMeters: asteroid.estimated_diameter.meters.estimated_diameter_max,
      }
    })
    .sort((a, b) => a.approachDate.localeCompare(b.approachDate))
}
