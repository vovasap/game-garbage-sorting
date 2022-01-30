import startTimer from './timer.js'

function addBuckets() {
  const bucketsTypes = [
    { name: 'вторсырье', colorName: 'yellow', color: '#ffd204' },
    { name: 'смешанные', colorName: 'green', color: '#8ec10f' },
    { name: 'бытовые', colorName: 'blue', color: '#0363f2' },
    { name: 'опасные', colorName: 'red', color: '#df2726' },
  ]

  const bucketsElement = document.querySelector('.buckets')
  const bucketTemplate = document.querySelector('#bucket')

  bucketsTypes.forEach((type, index) => {
    const bucketClone = bucketTemplate.content.cloneNode(true)

    const bucketLabel = bucketClone.querySelector('.bucket__label')

    bucketLabel.textContent = type.name
    bucketLabel.style.backgroundColor = type.color

    const bucketContainer =  bucketClone.querySelector('.bucket__container')
    const bucketTop =  bucketClone.querySelector('.bucket__top')
    const bucketBase =  bucketClone.querySelector('.bucket__base')

    bucketContainer.style.zIndex = 100 - index
    bucketTop.setAttribute('src', `../assets/images/wastetop_${type.colorName}.jpg`)
    bucketTop.setAttribute('alt', `wastetop_${type.colorName}`)
    bucketBase.setAttribute('src', `../assets/images/wastebox_${type.colorName}.jpg`)
    bucketBase.setAttribute('alt', `wastebox_${type.colorName}`)

    bucketsElement.append(bucketClone)
  })
}

function init() {
  const header = document.querySelector('.field__header')
  header.textContent = 'Выбери правильный бак для сортировки мусора!'

  addBuckets()

  startTimer()
}

init()