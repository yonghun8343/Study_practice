// k의 개수
function solution(i, j, k) {
  const arr = [];
  for (let l = i; l <= j; l += 1) {
    arr.push(l);
  }
  Array.fill();
  const a = arr.join("");

  const b = a.match(new RegExp(`${k}`, "g")) && 0;
  console.log(b);

  const c = b.length || 0;

  return c;
}

solution(1, 13, 1);

// 가까운 수
function solution(array, n) {
  var answer = array[0];
  var diff = n - array[0];
  array.forEach((v) => {
    console.log(answer, diff, Math.abs(n - v));
    if (Math.abs(n - v) < diff) {
      answer = v;
      diff = Math.abs(n - v);
    } else if (n - v === diff && v < answer) {
      answer = v;
    }
  });
  return answer;
}

// 2차원으로 만들기
function solution(num_list, n) {
  var answer = [];
  var arr = [];
  var l = 1;
  for (let i = 0; i < num_list.length; i += 1) {
    arr.push(num_list[i]);
    if (i === n * l - 1) {
      answer.push(arr);
      arr = [];
      l++;
    }
  }

  return answer;
}

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(n, n +i ));
  }
  return answer;
}
