import startTimer from './timer.js'
import addBuckets from './buckets.js'

function init() {
  addBuckets()

  const startButton = document.querySelector('.timer__start-button')
  
  startButton.addEventListener('click', startTimer)
}

init()