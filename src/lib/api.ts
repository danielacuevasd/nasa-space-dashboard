const NASA_API_BASE_URL = 'https://api.nasa.gov'
const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY

export class NasaApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'NasaApiError'
    this.status = status
  }
}

export async function fetchFromNasa<T>(
  path: string,
  params: Record<string, string> = {},
): Promise<T> {
  const url = new URL(path, NASA_API_BASE_URL)
  url.searchParams.set('api_key', NASA_API_KEY)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }

  const response = await fetch(url)

  if (!response.ok) {
    const reason = response.statusText || `código ${response.status}`
    throw new NasaApiError(response.status, `NASA API error: ${reason}`)
  }

  return response.json()
}
