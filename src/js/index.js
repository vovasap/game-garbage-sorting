import startTimer from './timer.js'
import addBuckets from './buckets.js'

function init() {
  const header = document.querySelector('.field__header')
  header.textContent = 'Выбери правильный бак для сортировки мусора!'

  addBuckets()

  const startButton = document.querySelector('.timer__start-button')
  
  startButton.addEventListener('click', startTimer)
}

init()