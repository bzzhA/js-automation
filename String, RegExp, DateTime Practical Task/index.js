//*****************************************************************************************//

// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches
//  the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const st = "ahb acb aeb aeeb adcb axeb";
const myReg = /a\w+b/gim;
const result = st.match(myReg);

//*****************************************************************************************//

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const testString = "2 + 3 223 2223";
const myRegular = /2\W+3/gim;
const results = testString.match(myReg1);

//*****************************************************************************************//

// Get the day, month and year of the current date and output it to the console separately

const myDate = new Date();

console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());

//*****************************************************************************************//
