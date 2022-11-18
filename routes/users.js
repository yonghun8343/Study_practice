const express = require("express");
const { sendMail, randomNumber } = require("../functions/mail");
const asyncSQL = require("../functions/db");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

// app.js에서 app.use("/users", usersRouter)를 하였기 떄문에 경로는 다음과 같습니다.
// localhost:3000/users/auth_mail
router.post("/auth_mail", async (req, res) => {
  const userEmail = req.body.email; // post는 사용자가 보내는 데이터는 req.body에 담아져 옵니다.
  const rnd = randomNumber(); // 난수 생성

  await asyncSQL(
    `INSERT INTO auth (a_email, a_digit) VALUES ("${userEmail}", "${rnd}")`
  ); // auth테이블에 사용자의 이메일과 난수를 넣습니다.
  await sendMail(userEmail, rnd); // 이메일을 보냅니다
  res.status(201).json({
    status: "success",
    message: "성공되었습니다.",
  }); // 응답값을 보냅니다.
});

// app.js에서 app.use("/users", usersRouter)를 하였기 떄문에 경로는 다음과 같습니다.
// localhost:3000/users/auth_valid
router.get("/auth_valid", async (req, res) => {
  const { email, digit } = req.query; // get은 사용자가 보내는 데이터는 req.query에 담아져 옵니다.

  /**
   * `SELECT <- 조회 한다.
   * a_id, a_digit <- 이 값들을
   *  FROM auth <- auth 테이블에서
   * WHERE  <- 조건
   * a_email = "${email}"  <- a_email과 받은 값 email이 같은지
   * AND  <- 그리고
   * a_is_used = 0 <- a_is_used가 0인지
   * ORDER BY a_id DESC <- a_id를 내림차순으로 정렬로 조회
   * LIMIT 1` <- 그것 중 하나
   *
   * 즉 제일 마지막에 넣은 auth 테이블에 email이 조회 됩니다.
   */
  await asyncSQL(
    `SELECT a_id, a_digit FROM auth WHERE a_email = "${email}" AND a_is_used = 0 ORDER BY a_id DESC LIMIT 1`
  ).then(async (rows) => {
    // 값은 rows로 받아왔고 데이터베이스에서 조회는 항상 여러개의 값을 가지고 오는 기본이기 때문에 배열에 해당 값이 담겨 옵니다 그러므로 rows[0]을 해 주어야 합니다.
    if (digit.toString() === rows[0].a_digit.toString()) {
      await asyncSQL(
        `UPDATE auth SET a_is_used = 1 WHERE a_id = ${rows[0].a_id}`
      ); // 해당 값이 0인 것을 1로 수정
      res.status(200).json({
        status: "success",
        message: "일치 합니다.",
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "일치하지 않습니다.",
      });
    }
  });
});

router.post("/register", (req, res) => {});

module.exports = router;
