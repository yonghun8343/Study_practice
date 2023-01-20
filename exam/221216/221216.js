function solution(sides) {
  const a = sides.sort((a, b) => b - a);
  return a[0] < a[1] + a[2] ? 1 : 2;
}
