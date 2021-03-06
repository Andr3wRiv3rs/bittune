import {
  generateWave,
} from '../utils'

export const square = generateWave(
  (T, F, config) => {
    const width = 0.5 * F

    T %= F

    if (T < 0) T += F
    if (T <= width) return config.envelope.volume! * 1.5
    
    return 0
  },
)
