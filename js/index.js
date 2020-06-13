class Calculator {
    constructor(displayPrevious, displayCurrent) {
        this.displayPrevious = displayPrevious
        this.displayCurrent = displayCurrent
        this.clear()
    }
    clear() {
        this.currentValue = ''
        this.previousValue = ''
        this.operation = undefined
    }

    delete() {
        this.currentValue = this.currentValue.slice(0, -1)
    }

    allClear() {

    }

    equals() {

    }

    append(number) {
        if (number === '.' && this.currentValue.includes('.')) {
            return
        }

        this.currentValue = String(this.currentValue) + String(number)
    }

    chooseOperation(operation) {
        if (displayCurrent === '') {
            return
        }
        if (displayPrevious !== '') {
            this.compute(operation)
        }
        this.operation = operation
        this.previousValue = this.currentValue
        this.currentValue = ''
    }

    formatDisplay(number) {
        let string = String(number)
        let integer = Number(string.split('.')[0])
        let decimal = string.split('.')[1]
        let displayInteger
        if (Number.isNaN(integer)) {
            displayInteger = ''
        } else {
            displayInteger = integer.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimal != null) {
            return `${integer}.${decimal}`
        } else {
            return displayInteger
        }
    }

    compute() {
        let computation
        let previousNumber = parseFloat(this.currentValue)
        let currentNumber = parseFloat(this.previousValue)

        if (Number.isNaN(previousNumber) || Number.isNaN(currentNumber)) {
            return
        }
        switch (this.operation) {
            case '+':
                computation = previousNumber + currentNumber
                break
            case '-':
                computation = previousNumber - currentNumber
                break
            case '*':
                computation = previousNumber * currentNumber
                break
            case '÷':
                computation = previousNumber / currentNumber
                break
            default:
                return
        }
        this.currentValue = computation
        this.operation = undefined
        this.previousValue = ' '
    }

    updateDisplay() {
        this.displayCurrent.innerText = this.formatDisplay(this.currentValue)
        if (this.operation != null) {
            this.displayPrevious.innerText = `${this.formatDisplay(this.previousValue)} ${this.operation}`
        } else {
            this.displayPrevious.innerText = ''
        }

    }

}

const numbers = document.querySelectorAll('.btn-number')
const operators = document.querySelectorAll('.btn-operator')
const allClear = document.querySelector('.btn-all-clear')
const deleteNum = document.querySelector('.btn-delete')
const equals = document.querySelector('.btn-equals')
let displayPrevious = document.querySelector('.display-previous')
let displayCurrent = document.querySelector('.display-current')


const calculator = new Calculator(displayPrevious, displayCurrent)


numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        calculator.append(button.innerText)
        calculator.updateDisplay()
    })
})

allClear.addEventListener('click', (e) => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteNum.addEventListener('click', (e) => {
    calculator.delete()
    calculator.updateDisplay()
})

operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equals.addEventListener('click', (e) => {
    calculator.compute()
    calculator.updateDisplay()
})