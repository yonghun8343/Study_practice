function solution(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1, numbers.length), numbers[0]];
}

function solution(numbers, direction) {
  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  return numbers;
}
