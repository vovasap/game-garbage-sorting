import { bucketsTypes } from './buckets.js'

const rightCounter = document.querySelector('.answer__counter_right')
const wrongCounter = document.querySelector('.answer__counter_wrong')
const garbage = document.querySelector('.timer__garbage')
let buckets = []
let colors = []
let currentColor
let rigthAnswer = 0
let wrongAnswer = 0


export function startGame() {
  colors = Object.values(bucketsTypes).map(type => type.color)

  buckets = document.querySelectorAll('.bucket__container')

  buckets.forEach(bucket => {
    bucket.style.cursor = 'pointer'
    bucket.addEventListener('click', checkSelection)
  })

  addGarbage()

}

export function stopGame() {
  buckets.forEach(bucket => {
    bucket.style.cursor = 'auto'
    bucket.removeEventListener('click', checkSelection)
  })
  garbage.classList.add('hidden')
}

function addGarbage() {
  const randomIndex = Math.floor(Math.random() * colors.length)

  garbage.style.backgroundColor = colors[randomIndex]
  garbage.dataset.color = colors[randomIndex]
  currentColor = colors[randomIndex]
  garbage.classList.remove('hidden')
}

function checkSelection(e) {
  const bucket = e.target.closest('.bucket__container')
  if (bucket.dataset.color === currentColor) {
    rigthAnswer += 1
    rightCounter.textContent = rigthAnswer
  } else {
    wrongAnswer += 1
    wrongCounter.textContent = wrongAnswer
  }
  addGarbage()
}