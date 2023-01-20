const MimeNode = require("nodemailer/lib/mime-node");

// 1번 문제 정답
function call(v1) {
  return new Promise((resolve) => {
    resolve(v1[0] + v1[1]);
  });
}

call([1, 2]).then((result) => {
  console.log(result);
});

// 2번 문제 정답
const error = false; // true이면 에러가 있음 , false이면 에러가 없음

function promise() {
  return new Promise((resolve, reject) => {
    if (error === true) {
      resolve("success");
    } else {
      reject("fail");
    }
  });
}

promise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// 3번 문제 정답
add(1, 1)
  .then((result) => min(result, 2))
  .then((result) => mul(result, 4))
  .then((result) => div(result, 2));

// 4번 문제 정답
function getComm(userId) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };

    xhr.open("GET", `http://localhost:3000/comment/get/user/${userId}`);
    xhr.send();
  });
}

function makeComment(cid, userId, nick, date, content, sort = "DESC") {
  const div1 = document.createElement("div");
  div1.className = "comment-wrap";

  const div1_1 = document.createElement("div");
  div1_1.className = "comment-first";
  const div1_1_1 = document.createElement("div");
  div1_1_1.className = "comment-first-left";
  const span1_1_1_1 = document.createElement("span");
  span1_1_1_1.innerText = nick;
  const span1_1_1_2 = document.createElement("span");
  span1_1_1_2.innerText = date;
  div1_1_1.append(span1_1_1_1, span1_1_1_2);
  div1_1.append(div1_1_1);

  const div1_2 = document.createElement("div");
  div1_2.className = "comment-second";
  const span1_2_1 = document.createElement("span");
  span1_2_1.innerText = content;
  div1_2.append(span1_2_1);

  div1.append(div1_1, div1_2);

  if (sort === "ASC") {
    document.getElementsByClassName("profile-bottom")[0].prepend(div1);
  } else if (sort === "DESC") {
    document.getElementsByClassName("profile-bottom")[0].append(div1);
  }
}

getComm(1)
  .then((response) => {
    response.content.forEach((element) => {
      makeComment(
        element.cid,
        element.uid,
        element.nick,
        element.date,
        element.content
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

// 5번 문제 정답
function getFollowing(userId) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };

    xhr.open(
      "GET",
      `http://localhost:3000/profile/following/${userId}?page=${fingPage}&count=${fingCount}`
    );
    xhr.send();
  });
}

function makeFollow(userId, nick, sort) {
  const div1 = document.createElement("div");
  div1.className = "follow-content";

  const div1_1 = document.createElement("div");
  div1_1.className = "follow-top";
  const span1_1 = document.createElement("span");
  span1_1.innerText = nick;

  div1_1.addEventListener("click", () => {
    location.href = `http://localhost:3000/profile.html?uid=${userId}`;
  });

  div1_1.append(span1_1);
  div1.append(div1_1);

  if (sort === "ASC") {
    document.getElementsByClassName("profile-bottom")[0].prepend(div1);
  } else if (sort === "DESC") {
    document.getElementsByClassName("profile-bottom")[0].append(div1);
  }
}

getFollowing(1)
  .then((response) => {
    response.following.forEach((element) => {
      makeFollow(element.u_id, element.u_nick, "DESC");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// 6번 문제 정답
function solution(array) {
  array.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
  });

  // array.sort((a, b) => {
  //   return a - b;
  // });
  return array[Math.ceil(array.length / 2) - 1];
}

// 알고리즘 용 답안
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// 7번 문제 정답
function solution(my_string) {
  var answer = 0;
  const my_array = my_string.split("");
  for (let i = 0; i < my_array.length; i++) {
    const checkNumber = parseInt(my_array[i]);
    if (Number.isNaN(checkNumber) === false) {
      answer = answer + checkNumber;
    }
  }
  return answer;
}
