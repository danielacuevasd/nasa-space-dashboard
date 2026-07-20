import { useQuery } from '@tanstack/react-query'
import { fetchFromNasa } from '../lib/api'
import { cleanApodExplanation } from '../lib/apodText'
import type { ApodResponse } from '../types/apod'

export function useApod(date: string) {
  return useQuery({
    queryKey: ['apod', date],
    queryFn: () => fetchFromNasa<ApodResponse>('/planetary/apod', { date }),
    select: (data) => ({ ...data, explanation: cleanApodExplanation(data.explanation) }),
    staleTime: 1000 * 60 * 60,
  })
}
