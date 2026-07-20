import { useQuery } from '@tanstack/react-query'
import { fetchFromNasa } from '../lib/api'
import { flattenNeoWsFeed, getFeedEndDate } from '../lib/neows'
import type { NeoWsFeedResponse } from '../types/neows'

export function useNeoWs(startDate: string) {
  return useQuery({
    queryKey: ['neows', startDate],
    queryFn: () =>
      fetchFromNasa<NeoWsFeedResponse>('/neo/rest/v1/feed', {
        start_date: startDate,
        end_date: getFeedEndDate(startDate),
      }),
    select: flattenNeoWsFeed,
    staleTime: 1000 * 60 * 60,
  })
}
