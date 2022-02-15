function wordToBoard (word: string, state: string = 'correct') {
  return [[...word].map(letter => ({ letter, state }))]
}

const enterYourName = [
  [
    { letter: 'e', state: 'correct' },
    { letter: 'n', state: 'correct' },
    { letter: 't', state: 'correct' },
    { letter: 'e', state: 'correct' },
    { letter: 'r', state: 'correct' }
  ],
  [
    { letter: 'y', state: 'present' },
    { letter: 'o', state: 'present' },
    { letter: 'u', state: 'present' },
    { letter: 'r', state: 'present' },
    { letter: '', state: 'absent' },
  ],
  [
    { letter: '', state: 'absent' },
    { letter: 'n', state: 'correct' },
    { letter: 'a', state: 'correct' },
    { letter: 'm', state: 'correct' },
    { letter: 'e', state: 'correct' },
  ]
]

const abone = [
  [
    { letter: 'a', state: 'correct' },
    { letter: 'b', state: 'absent' },
    { letter: 'o', state: 'absent' },
    { letter: 'n', state: 'absent' },
    { letter: 'e', state: 'absent' }
  ],
]

const gizem = [
  [
    { letter: 'g', state: 'absent' },
    { letter: 'i', state: 'present' },
    { letter: 'z', state: 'absent' },
    { letter: 'e', state: 'absent' },
    { letter: 'm', state: 'absent' }
  ],
]

const falez = [
  [
    { letter: 'f', state: 'absent' },
    { letter: 'a', state: 'absent' },
    { letter: 'l', state: 'absent' },
    { letter: 'e', state: 'absent' },
    { letter: 'z', state: 'absent' }
  ],
]


const fight = [
  [
    { letter: 'b', state: 'correct' },
    { letter: 'a', state: 'correct' },
    { letter: 'ş', state: 'correct' },
    { letter: 'l', state: 'correct' },
    { letter: 'a', state: 'correct' }
  ],
]

const connecting = [
  [
    { letter: 'ö', state: 'correct' },
    { letter: 'n', state: 'correct' },
    { letter: 'c', state: 'correct' },
    { letter: 'e', state: 'correct' },
    { letter: '', state: 'absent' }
  ],
  [
    { letter: '', state: 'absent' },
    { letter: 's', state: 'present' },
    { letter: 'e', state: 'present' },
    { letter: 'n', state: 'present' },
    { letter: '', state: 'absent' },
  ],
  [
    { letter: '', state: 'absent' },
    { letter: '', state: 'absent' },
    { letter: 'b', state: 'correct' },
    { letter: 'u', state: 'correct' },
    { letter: 'l', state: 'correct' },
  ]
]

export default { wordToBoard, abone, gizem, falez, connecting, fight, enterYourName }
