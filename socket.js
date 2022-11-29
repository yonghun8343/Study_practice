const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");

const io = new Server();

io.on("connection", (socket) => {
  // 누군가가 들어왔을 때 이벤트
  console.log("누군가가 들어왔습니다."); // 누군가가 들어왔다는 로그

  socket.on("chat", (arg) => {
    // chat이라는 이벤트를 설정
    console.log(`chat이벤트가 발생했고, 값으로 ${arg}가 왔습니다.`); // chat이벤트가 발생하면 로그
    io.of("/").emit("hi", "hi이벤트를 서버에서 보냄."); // chat이벤트 발생하면 hi라는 이벤트를 보냄
  });
});

instrument(io, {
  auth: false,
});

module.exports = io;
