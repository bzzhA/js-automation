//*****************************************************************************************//

// In a try catch construction, wrap the code: console.log (a), let a = 3.
// And display an error - ‘let must be declared’ before use.
// When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch {
  console.log("let must be declared before use");
}

try {
  let x = 1;
  let y = 0;
  if (x / y === Infinity) {
    throw new Error("cannot be divided by zero");
  }
} catch (err) {
  console.log(err);
}

//*****************************************************************************************//
