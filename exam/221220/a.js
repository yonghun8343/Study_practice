function solution(num_list, n) {
  const answer = [];
  console.log(num_list.length);
  for (let i = 0; i < num_list.length; i += n) {
    console.log(i);
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
