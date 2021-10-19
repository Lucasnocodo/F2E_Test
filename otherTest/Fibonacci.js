const makeFibonacciArr = (n) => {
  let list = [0, 1];
  let num1 = 0;
  let num2 = 1;
  let next = 1;
  for (let i = 2; i < n; i++) {
    list.push(next);
    num1 = num2 + next;
    num2 = next;
    next = num1;
  }
  return list;
};

const Fibonacci = (index) => {
  const reg = /^[0-9]\d*$/;
  if (!reg.test(index)) return "Please input positive integer.";
  return makeFibonacciArr(index + 1)[index];
};

// Set textValue to get the result.
const textValue = 0
console.log(Fibonacci(textValue))
