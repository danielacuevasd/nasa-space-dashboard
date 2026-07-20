export interface NeoWsEstimatedDiameterUnit {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface NeoWsEstimatedDiameter {
  kilometers: NeoWsEstimatedDiameterUnit
  meters: NeoWsEstimatedDiameterUnit
  miles: NeoWsEstimatedDiameterUnit
  feet: NeoWsEstimatedDiameterUnit
}

export interface NeoWsCloseApproachData {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  miss_distance: {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  orbiting_body: string
}

export interface NeoWsAsteroid {
  id: string
  name: string
  absolute_magnitude_h: number
  estimated_diameter: NeoWsEstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: NeoWsCloseApproachData[]
}

export interface NeoWsFeedResponse {
  element_count: number
  near_earth_objects: Record<string, NeoWsAsteroid[]>
}

export interface NearEarthObject {
  id: string
  name: string
  approachDate: string
  isPotentiallyHazardous: boolean
  missDistanceLunar: number
  relativeVelocityKmPerHour: number
  estimatedDiameterMinMeters: number
  estimatedDiameterMaxMeters: number
}
