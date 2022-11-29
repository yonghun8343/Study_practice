// 1번 문제
const user = {
  name: "hs",
  phon: "010-1234-1234",
  live: "pusan",
  age: 92,
};

// 2번 문제
user.height = 200;

// 3번 문제
const age = {
  init: 0,
  add() {
    age.init += 1;
    return age.init;
  },
};

// 4번 문제
// 4-1 for문을 사용
for (let i = 0; i < user.count.length; i += 1) {
  console.log(user.count[i]);
}


// 4-2 forEach문을 사용
user.count.forEach((element) => {
  console.log(element);
});

// 5번
const user = {
  name: "hs",
  phon: "010-1234-1234",
  live: "pusan",
  age: 92,
};
JSON.stringify(user);

// 6번
let user = {
  name: "hs",
  phon: "010-1234-1234",
  live: "pusan",
  age: 92,
};
user = JSON.stringify(user);
user = JSON.parse(user);
