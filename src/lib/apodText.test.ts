import { describe, expect, it } from 'vitest'
import { cleanApodExplanation } from './apodText'

describe('cleanApodExplanation', () => {
  it('strips a trailing generator/tool credit line scraped from the NASA page', () => {
    const raw =
      "A flying saucer from outer space crash-landed in the Utah desert after being tracked by radar and chased by helicopters. The year was 2004, and no space aliens were involved.    Almost Hyperspace: Random APOD Generator"

    expect(cleanApodExplanation(raw)).toBe(
      'A flying saucer from outer space crash-landed in the Utah desert after being tracked by radar and chased by helicopters. The year was 2004, and no space aliens were involved.',
    )
  })

  it('leaves a normal explanation untouched when it ends with real content', () => {
    const raw =
      'Why is Betelgeuse fading? No one knows. Betelgeuse, one of the brightest and most recognized stars in the night sky, is only half as bright as it used to be only five months ago.'

    expect(cleanApodExplanation(raw)).toBe(raw)
  })

  it('leaves a long trailing clause untouched even if it contains a noise keyword', () => {
    const raw =
      'The image shows a nebula in visible light. This particular observation used a specialized generator built specifically for capturing faint emission lines from ionized hydrogen across the field'

    expect(cleanApodExplanation(raw)).toBe(raw)
  })

  it('leaves legitimate trailing photo credit lines untouched', () => {
    const raw = 'A stunning view of the Orion Nebula captured last week. Image Credit: NASA, ESA'

    expect(cleanApodExplanation(raw)).toBe(raw)
  })
})
