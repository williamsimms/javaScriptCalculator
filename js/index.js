const numbers = document.querySelectorAll('.btn-number')
const operators = document.querySelectorAll('.btn-operator')
const allClear = document.querySelector('.btn-all-clear')
const deleteNum = document.querySelector('.btn-delete')
const equals = document.querySelector('.btn-equals')
let displayPrevious = document.querySelector('.display-previous')
let displayCurrent = document.querySelector('.display-current')
displayCurrent.textContent = '0'

function display() {
    numbers.forEach((num) => {
        num.addEventListener('click', (e) => {
            if (displayCurrent.innerText.length === 1 && displayCurrent.innerText.includes('0')) {
                displayCurrent.innerText = ' '
            }
            if (num.innerText === '.' && displayCurrent.innerText.includes('.')) {
                return
            }
            displayCurrent.innerText += num.innerText

        })
    })
}

function clear() {
    displayCurrent.textContent = '0'
    displayPrevious.textContent = ''
}

function deleteNumber() {
    displayCurrent.innerText = displayCurrent.innerText.slice(0, -1)
}

function updateDisplay() {

}

function operation() {
operators.forEach((operator) => {
     operator.addEventListener('click',(e) => {
        displayPrevious.innerText = displayCurrent.innerText + operator.innerText
        displayCurrent.innerText = '0' 

     })
 })


}

function equals() {
     
}

allClear.addEventListener('click', (e) => {
    clear()
})

deleteNum.addEventListener('click', (e) => {
    deleteNumber()
})


display()
operation()