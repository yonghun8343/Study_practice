/* eslint-disable camelcase */

function makeBoard(bid, name, date, content) {
  const div1 = document.createElement("div");
  div1.className = "board-content";

  const div1_1 = document.createElement("div");
  div1_1.className = "content-top";
  const span1_1_1 = document.createElement("span");
  span1_1_1.innerText = `작성자 : ${name}`;
  const span1_1_2 = document.createElement("span");
  span1_1_2.innerText = date;
  div1_1.append(span1_1_1, span1_1_2);

  const div1_2 = document.createElement("div");
  div1_2.className = "content-middle";
  const span1_2_1 = document.createElement("span");
  span1_2_1.innerText = content;
  div1_2.append(span1_2_1);

  const div1_3 = document.createElement("div");
  div1_3.className = "comment-container";
  const div1_3_1 = document.createElement("div");
  div1_3_1.className = "submit-btn";
  div1_3_1.id = "comment-btn";
  const span1_3_1_1 = document.createElement("span");
  span1_3_1_1.innerText = "댓글 보기";
  div1_3_1.append(span1_3_1_1);

  div1_3_1.addEventListener("click", () => {
    location.href(`http://localhost:3000/detail.html/${bid}`);
  });

  div1_3.append(div1_3_1);

  div1.append(div1_1, div1_2, div1_3);

  document.getElementsByClassName("wrap-right-bottom")[0].appendChild(div1);
}

function getDateTime(date) {
  const dt = new Date(date);
  const year = dt.getFullYear();
  const month = `0${dt.getMonth() + 1}`.slice(-2);
  const day = `0${dt.getDate()}`.slice(-2);
  const hh = `0${dt.getHours()}`.slice(-2);
  const mm = `0${dt.getMinutes()}`.slice(-2);
  const ss = `0${dt.getSeconds()}`.slice(-2);
  // 몇 년전, 몇 분전, 몇 초전 구현 가능?
  // ISO 시간 써서 switch문으로 구현
  return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
}

console.log("111");

const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log("222");
  if (xhr.status === 200) {
    console.log("333");
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    response.content.forEach((element) => {
      makeBoard(
        element.bid,
        element.nick,
        getDateTime(element.date),
        element.content
      );
    });
  }
};

xhr.open("GET", `http://localhost:3000/board/get/1?limit=10`);
xhr.send();
