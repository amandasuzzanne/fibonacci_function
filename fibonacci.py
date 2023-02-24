# Fibonacci implementation in python

def fibonacci(n):
  # base case F(0) = 0 , F(1) = 1
  if (n < 2):
    return n;
  # F(n) = F(n-1) - F(n-2)
  return fibonacci(n-1) + fibonacci(n-2);


