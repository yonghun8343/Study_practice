// 1번 문제 정답
const array = [1, 2, 3, 4, 5];
const array2 = [];
for (let i = 0; i < array.length; i++) {
  // array2[i] = array[i] * 2
  array2.push(array[i] * 2);
}

// 2번 문제 정답
const array = [1, 2, 3, 4, 5];
const array2 = [];
array.forEach((value) => {
  // array2[i] = elemnt * 2
  array2.push(value * 2);
});

// 3번 문제 정답
const array = [1, 2, 3, 4, 5];
const array2 = array.map((value) => {
  return value * 2;
});

// 4번 문제 정답
const array = [
  "일어나기",
  "씻기",
  "커피사기",
  "출근하기",
  "일하기",
  "점심먹기",
  "일하기",
  "퇴근하기",
];
const array2 = [];
for (let i = 0; i < array.length; i++) {
  array2[i] = <li>{array[i]}</li>;
  // array2.push(<li>{array[i]}</li>)
}

// 5번 문제 정답
const array = [
  "일어나기",
  "씻기",
  "커피사기",
  "출근하기",
  "일하기",
  "점심먹기",
  "일하기",
  "퇴근하기",
];
const array2 = [];
array.forEach((value) => {
  array2[i] = <li>{value}</li>;
  // array2.push(<li>{value}</li>);
});

// 6번 문제 정답
const array = [
  "일어나기",
  "씻기",
  "커피사기",
  "출근하기",
  "일하기",
  "점심먹기",
  "일하기",
  "퇴근하기",
];
const array2 = array.map((value) => {
  return <li>{value}</li>;
});

// 7번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = [];
for (let i = 0; i < array.length; i++) {
  array2[i] = (
    <li>{`${array[i].id}번의 이름은 ${array[i].name}이고 닉네임은 ${array[i].nick}입니다.`}</li>
  );
  // array2.push(
  //   <li>{`${array[i].id}번의 이름은 ${array[i].name}이고 닉네임은 ${array[i].nick}입니다.`}</li>
  // );
}

root.render(<Todolist clientList={array2} />);

// 8번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = [];
array.forEach((element) => {
  array2[i] = (
    <li>{`${element.id}번의 이름은 ${element.name}이고 닉네임은 ${element.nick}입니다.`}</li>
  );
  // array2.push(
  //   <li>{`${element.id}번의 이름은 ${element.name}이고 닉네임은 ${element.nick}입니다.`}</li>
  // );
});

root.render(<Todolist clientList={array2} />);

// 9번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = array.map((value) => {
  return (
    <li>{`${element.id}번의 이름은 ${element.name}이고 닉네임은 ${element.nick}입니다.`}</li>
  );
});

root.render(<Todolist clientList={array2} />);

// 10번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
// const array2 = array.map((value) => {
//   return (
//     value.id === "1" && (
//       <li>{`${value.id}번의 이름은 ${value.name}이고 닉네임은 ${value.nick}입니다.`}</li>
//     )
//   );
// });
const array2 = array.map((value) => {
  if (value.id === "1") {
    return (
      <li>{`${value.id}번의 이름은 ${value.name}이고 닉네임은 ${value.nick}입니다.`}</li>
    );
  }
});

root.render(<Todolist clientList={array2} />);

// 11번 문제 정답
function solution(my_string, letter) {
  var answer = "";
  const my_array = my_string.split("");
  for (let i = 0; i < my_array.length; i++) {
    if (my_array[i] === letter) {
      my_array.splice(i, 1);
    }
  }
  answer = my_array.join("");
  return answer;
}

function solution(my_string, letter) {
  var answer = "";
  const my_array = my_string.split("");
  for (let i = my_array.length - 1; i >= 0; i++) {
    if (my_array[i] === letter) {
      my_array.splice(i, 1);
    }
  }
  answer = my_array.join("");
  return answer;
}

// forEach와 splice로는 구현하기 힘들다
function solution(my_string, letter) {
  var answer = "";
  const my_array = my_string.split("");
  my_array.forEach((element, index) => {
    if (element === letter) {
      my_array.splice(index, 1);
    }
  });
  answer = my_array.join("");
  return answer;
}

function solution(my_string, letter) {
  var answer = "";
  const my_array = my_string.split("");
  answer = my_array.map((value) => {
    if (value !== letter) {
      return value;
    }
  });
  answer = answer.join("");
  return answer;
}

function solution(my_string, letter) {
  var answer = "";
  answer = my_string.split(letter).join("");
  return answer;
}

// 12번 문제 풀이
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

function solution(strlist) {
  var answer = [];
  strlist.forEach((value) => {
    answer.push(value.length);
  });
  return answer;
}

function solution(strlist) {
  var answer = [];
  strlist.map((v) => {
    return v.length;
  });
  return answer;
}

