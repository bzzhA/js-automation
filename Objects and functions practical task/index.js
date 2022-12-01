//*****************************************************************************************//

// -Create a car object, add a color property to it with the value equals 'black'

// -Change the color property of the car object to 'green'

// -Add the power property to the car object, which is a function and displays the engine power to the console

const car = { color: "black" }
car.color = "green"
car.power = function() {
  const enginePower = "110 horce power"
  console.log(enginePower)
}

//*****************************************************************************************//

// -Pears and apples are accepted to the warehouse,
//  write a function that returns the result of adding the number of accepted pears and apples

function summFruit(pears, apples) { 
  return `Pears and apples are accepted to the warehouse in quantities = ${pears + apples}`
}

const summFruit = (pears, apples) => {
  return `Pears and apples are accepted to the warehouse in quantities = ${pears + apples}`
}

//*****************************************************************************************//

// -Your name is saved in the payment terminal, write a function to define the name in the terminal 
// (if you entered your name, then hello + name, if not, then there is no such name)

function verifyName(name) {
  if (name === "Artem") {
    return `Hello ${name}`
  }

  return "There is no such name"
}

const verifyName = (name) => {
  if (name === "Artem") {
    return `Hello ${name}!`
  }

  return "There is no such name"
}

//*****************************************************************************************//

// -Write a function for calculating the type of argument and type output to the console

function verifyType(type) {
  return `This type is: ${typeof(type)}`
}

const verifyType = (type) => {
  const a = '\u2329'
  const b = '\u232a'
  return `This type is: ${a} ${typeof(type)} ${b}`
}

//*****************************************************************************************//

// -Write a function that determines whether a number is prime or not

function verifyPrimeNumber(num) {
  if (num === 0) {
    return "It's 0"
  }
  
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return "This is not prime number"
  }
  
  return "This is prime number"
}