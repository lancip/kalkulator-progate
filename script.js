//const numbers = document.querySelectorAll(".number")
//numbers.forEach((number) => {
  //  number.addEventListener("click", (event) => {
    //   console.log(event.target.value)
    //})
//})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        //console.log('number button is pressed') 
       //updateScreen(event.target.value)
       inputNumber(event.target.value)
       updateScreen (currentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber ='0'

const inputNumber = (number) => {
   if (currentNumber === '0') {
    currentNumber = number
    //currentNumber += number
    } else {
    currentNumber += number
    //currentNumber = number
    }
}


const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
       //updateScreen(event.target.value)
       inputOperator(event.target.value)
    })
})
const inputOperator = (operator) => {
    if(calculationOperator === '') {
    prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
    //console.log('equal button is pressed') 
    calculate()
    if (currentNumber === 0) {
        clearAll()
    }
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            //result = parseInt(prevNumber) + parseInt(currentNumber)
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    //console.log ('ac button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    //console.log (event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const persentage = document.querySelector('.percentage');

persentage.addEventListener('click', (event) => {
    persentageNumber(event.target.value);
    updateScreen(currentNumber);
});


const persentageNumber = () => {
    if (currentNumber === '0') {
        return;
    }
    currentNumber = currentNumber / 100;
} 
