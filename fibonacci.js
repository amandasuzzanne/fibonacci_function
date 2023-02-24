const fibonacci = (n) => {
  //base case
  if ( n < 2) return n;
    
  // f(n) = f(n-1) + f(n-2)
  return fibonacci(n-1) + fibonacci(n-2);
}

//prev implemention may have some complexities given a case input is extremely large
//so alternatively

const fibonacci2 = (n) => {
  const sequence = [0,1];
  
  for (let i = 2; i < sequence.length; i++){
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence[n];
}


//test -remove the .skip to run the implentation against the test
test.skip("Test Fibonacci function1", () => {
  const num = 1;
  const num2 = 5;
  const answer = fibonacci(num);
  const answer2 = fibonacci(num2)
  
  expect(answer).toBe(1)
  expect(answer2).toBe(5)
})


//test -remove the .skip to run the implentation against the test
test.skip("Test Fibonacci function2", () => {
  const num = 6;
  const num2 = 100;
  const answer = fibonacci(num);
  const answer2 = fibonacci(num2)
  
  expect(answer).toBe(1)
  expect(answer2).toBe(5)
})
