/* eslint-disable camelcase */

function makeComment(name, date, content) {
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

  div1_3.append(div1_3_1);

  div1.append(div1_1, div1_2, div1_3);

  document.getElementsByClassName("wrap-right-bottom")[0].appendChild(div1);
}
