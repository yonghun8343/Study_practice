/* eslint-disable no-undef */
let socket = ""; // 빈값으로 초기화 전역에서 사용하기 위해서

const connect = document.getElementById("connect"); // 연결 버튼 DOm 받아옴
connect.addEventListener("click", () => {
  // 연결 버튼을 클릭 했으 ㄹ떄
  socket = io("ws://localhost:3000", {
    // 연결할 주소 및 옵션
    autoConnect: false, // 자동연결 설정 false
    transports: ["websocket"], // 연결 방식은 websocket(서버와 동일)
  });

  socket.open((err) => {
    // 연결 시 에러가 발생하면 이벤트
    console.log(err);
  });

  socket.on("connect", () => {
    // 연결되었을 때 이벤트
    console.log(`socket의 아이디는 ${socket.id}`);
    console.log(`socket의 연결 상태는${socket.connected}`);
  });

  socket.on("hi", (arg) => {
    // hi라는 이벤트를 받았을 떄 로그 찍음
    console.log(arg);
  });
});

const send = document.getElementById("send"); // 보내기 버튼 DOM 받아옴
send.addEventListener("click", () => {
  // 보내기 버튼 클릭 시
  socket.emit("chat", "hellow"); // chat이벤트를 전송
});
