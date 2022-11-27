/* eslint-disable camelcase */
// [0]? [1]bid[0] = 38[1]
const url = location.search;
const uid = url.split("?")[1].split("=")[1];

sessionStorage.setItem("id", 4);
sessionStorage.setItem("name", "4");
sessionStorage.setItem("nick", "4");

console.log(sessionStorage.getItem("nick"));

document.getElementById("nick").innerText = sessionStorage.getItem("nick");

// intl
const number = 123456;
const options = {
  notation: "compact",
};

const a = new Intl.NumberFormat("ko-KR", options).format(number);
const b = new Intl.NumberFormat("en-US", options).format(number);
console.log(a);
console.log(b);
