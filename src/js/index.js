function addBuckets() {
  const bucketsTypes = [
    { name: 'вторсырье', color: 'yellow' },
    { name: 'смешанные', color: 'green' },
    { name: 'бытовые', color: 'blue' },
    { name: 'опасные', color: 'red' },
  ]

  const bucketsElement = document.querySelector('.buckets')
  const bucketTemplate = document.querySelector('#bucket')

  bucketsTypes.forEach(type => {
    const bucketClone = bucketTemplate.content.cloneNode(true)

    const bucketLabel = bucketClone.querySelector('.bucket__label')

    bucketLabel.textContent = type.name
    bucketLabel.style.backgroundColor = type.color

    const bucketTop =  bucketClone.querySelector('.bucket__top')
    const bucketBase =  bucketClone.querySelector('.bucket__base')

    bucketTop.setAttribute('src', `../assets/images/wastetop_${type.color}.jpg`)
    bucketTop.setAttribute('alt', `wastetop_${type.color}`)
    bucketBase.setAttribute('src', `../assets/images/wastebox_${type.color}.jpg`)
    bucketBase.setAttribute('alt', `wastebox_${type.color}`)

    bucketsElement.append(bucketClone)
  })
}

function init() {
  const header = document.querySelector('.field__header')
  header.textContent = 'Выбери правильный бак для сортировки мусора!'

  addBuckets()
}

init()