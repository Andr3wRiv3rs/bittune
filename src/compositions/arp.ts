import {
  Audio,
  Note, 
  Track, 
} from "@types"
import {
  notes, 
} from "../utils"
import {
  square,
} from "../waves"

export const arp: Track[] = [
  function *track ({ beat }): Audio {
    let usage = 0

    const instrument = (note: Note, beat: number) => {
      usage++

      return square(note, beat, {}, {
        init (config) {
          config.frequency += usage * 4
        },
      })
    }

    const dMajor: Note[] = [
      'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4',
      "C#4", "B3", "A3", "G3", "F#3", "E3",
    ]

    for (const note of [
      ...dMajor,
      ...dMajor,
      ...dMajor,
      ...dMajor,
      ...['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4'] as Note[],
    ]) {
      yield instrument(note, 1/8)
      yield beat(1/8)
    }

    yield instrument(notes['D4'], 1)

    yield beat(1)
  },
]
