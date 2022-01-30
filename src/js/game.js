import { bucketsTypes } from './buckets.js'

const rightCounter = document.querySelector('.answer__counter_right')
const wrongCounter = document.querySelector('.answer__counter_wrong')
const garbage = document.querySelector('.timer__garbage')
let garbageCoordX = 0
let garbageCoordY = 0
let buckets = []
let colors = []
let currentColor
let rigthAnswer = 0
let wrongAnswer = 0
let isBusy = false
const animationDuration = 700


export function startGame() {
  colors = Object.values(bucketsTypes).map(type => type.color)

  buckets = document.querySelectorAll('.bucket__container')

  buckets.forEach(bucket => {
    bucket.style.cursor = 'pointer'
    bucket.addEventListener('click', checkSelection)
  })

  addGarbage()
  const [ x, y ] = getCoords(garbage)
  garbageCoordX = x
  garbageCoordY = y

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
  if (isBusy) {
    return
  }
  isBusy = true
  const bucket = e.target.closest('.bucket__container')
  const bucketTop = bucket.querySelector(`[data-color="${bucket.dataset.color}"`)

  if (bucket.dataset.color === currentColor) {
    rigthAnswer += 1
    rightCounter.textContent = rigthAnswer
  } else {
    wrongAnswer += 1
    wrongCounter.textContent = wrongAnswer
  }
  const [ bucketTopCoordX, bucketTopCoordY ] = getCoords(bucketTop)
  garbage.animate([
    {
      width: '30px',
      height: '30px',
    },
    { 
      transform: `translate(${bucketTopCoordX - garbageCoordX}px , ${bucketTopCoordY - garbageCoordY - 20}px)`,
      width: '20px',
      height: '20px',
    },
  ], {
    duration: animationDuration / 2,
    easing: 'ease-in-out',
  })
  bucketTop.animate([
    { top: '5px' },
    { top: '-45px' },
    { top: '5px' },
  ], {
    duration: animationDuration,
    easing: 'ease-in-out',
  })
  
  setTimeout(() => {
    isBusy = false
  }, animationDuration)

  setTimeout(() => {
    addGarbage()
  }, animationDuration / 2)
}

function getCoords(elem) {
  const { x, y, height, width } = elem.getBoundingClientRect()
  const centerX = (x + width / 2).toFixed(0)
  const centerY = (y + height / 2).toFixed(0)
  return [centerX, centerY]
}