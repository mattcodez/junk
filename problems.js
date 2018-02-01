// reverse a string recursively

{
  const str = "this is my string";

  function reverse(str) {
    if (str.length === 0) return "";
    return str[str.length - 1] + reverse(str.substr(0, str.length - 1));
  }

  console.log(reverse(str));
}


// get fib numbers
{
  function fib(prev1, prev2, nth) {
    if (nth <= 0) return [];
    const next = prev1 + prev2;
    if (next === 0) return [1, ...fib(1, 0, --nth)];
    return [next, ...fib(next, prev1, --nth)];
  }

  console.log(fib(0, 0, 10))
}
