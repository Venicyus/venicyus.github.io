function disabledBtn(btn) {
  btn.classList.add('opacity-50', 'cursor-not-allowed')
}

function processRemoveDuplicates() {
  const inputElement = document.getElementById('json_input')
  const resultElement = document.querySelector('#result pre')
  const buttonElement = document.getElementById('btn_process')

  try {
    disabledBtn(buttonElement)
    const value = inputElement.value.replaceAll("'", '"')
    const arr = JSON.parse(value, null, 2)

    if (!Array.isArray(arr)) {
      result.textContent = 'Input is not a valid JSON array.'
      return
    }

    const newArr = [...new Set(arr.map(item => JSON.stringify(item)))]
    const uniqueArr = newArr.map(item => JSON.parse(item, null, 2))

    resultElement.textContent = JSON.stringify(uniqueArr, null, 2)
  } catch (error) {
    resultElement.textContent = 'Invalid JSON input.'
  }
}

function copyToClipboard() {
  const value = document.querySelector('#result pre').textContent

  navigator.clipboard.writeText(value).then(
    () => {},
    err => {
      console.error('Could not copy text: ', err)
    }
  )
}
