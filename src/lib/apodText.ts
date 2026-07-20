const MAX_TRAILING_NOISE_LENGTH = 60

const TRAILING_NOISE_KEYWORDS = ['generator', 'presentation', 'retrospective', 'poster']

export function cleanApodExplanation(explanation: string): string {
  const lastPunctuationIndex = Math.max(
    explanation.lastIndexOf('.'),
    explanation.lastIndexOf('!'),
    explanation.lastIndexOf('?'),
  )

  const isAlreadyAtEnd = lastPunctuationIndex === -1 || lastPunctuationIndex === explanation.length - 1
  if (isAlreadyAtEnd) {
    return explanation
  }

  const tail = explanation.slice(lastPunctuationIndex + 1).trim()
  const isShortEnough = tail.length > 0 && tail.length <= MAX_TRAILING_NOISE_LENGTH
  const looksLikeTrailingCredit = TRAILING_NOISE_KEYWORDS.some((keyword) =>
    tail.toLowerCase().includes(keyword),
  )

  if (!isShortEnough || !looksLikeTrailingCredit) {
    return explanation
  }

  return explanation.slice(0, lastPunctuationIndex + 1)
}
