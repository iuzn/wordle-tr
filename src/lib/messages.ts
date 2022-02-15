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
    { letter: 'f', state: 'correct' },
    { letter: 'i', state: 'correct' },
    { letter: 'g', state: 'correct' },
    { letter: 'h', state: 'correct' },
    { letter: 't', state: 'correct' }
  ],
]

const connecting = [
  [
    { letter: 'f', state: 'correct' },
    { letter: 'i', state: 'correct' },
    { letter: 'n', state: 'correct' },
    { letter: 'd', state: 'correct' },
    { letter: '', state: 'absent' }
  ],
  [
    { letter: 't', state: 'present' },
    { letter: 'h', state: 'present' },
    { letter: 'o', state: 'present' },
    { letter: 's', state: 'present' },
    { letter: 'e', state: 'present' },
  ],
  [
    { letter: 'w', state: 'correct' },
    { letter: 'o', state: 'correct' },
    { letter: 'r', state: 'correct' },
    { letter: 'd', state: 'correct' },
    { letter: 's', state: 'correct' },
  ]
]

export default { wordToBoard, abone, gizem, falez, connecting, fight, enterYourName }
