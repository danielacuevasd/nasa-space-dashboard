import { useQuery } from '@tanstack/react-query'
import { fetchFromNasa } from '../lib/api'
import type { MarsRoverPhotosResponse, RoverName } from '../types/marsRover'

export function useMarsRoverPhotos(rover: RoverName, earthDate: string) {
  return useQuery({
    queryKey: ['mars-rover-photos', rover, earthDate],
    queryFn: () =>
      fetchFromNasa<MarsRoverPhotosResponse>(`/mars-photos/api/v1/rovers/${rover}/photos`, {
        earth_date: earthDate,
      }),
    select: (data) => data.photos,
    staleTime: 1000 * 60 * 60,
  })
}
