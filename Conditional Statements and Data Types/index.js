//1 Perform addition of various types (string + boolean, string + number, number + boolean)

  console.log("String" + true) //result Stringtrue
  console.log("String" + 5) //result String5
  console.log(5 + false) //result 5

//2 Perform multiplication of various types (string * boolean, string * number, number * boolean)

  console.log("String" * true) //result NaN
  console.log("String" * 5) //result NaN
  console.log(5 * false) //result 0

//3 Divide different types (string / boolean, string / number, number / Boolean)

  console.log("String" / true) //result NaN
  console.log("String" / 5) //result NaN
  console.log(5 / false) //result Infinity

//4 Perform explicit conversion (number, string, boolean)

  console.log(Number("1984")) //result Number 1984
  console.log(parseInt("19.984")) //result Number 19
  console.log(Number(true)) //result Number 1
  console.log(String(1984)) //result String "1984"
  console.log(Boolean(5 !== 4)) //result true
  console.log(Boolean(1)) //result true
  console.log(Boolean(0)) //result false
  console.log(Boolean(-1)) //result true
  console.log(Boolean("")) //result false
  console.log(Boolean([])) //result true
  console.log(Boolean({})) //result true
