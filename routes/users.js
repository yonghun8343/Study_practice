const express = require("express");
const { sendMail, randomNumber } = require("../functions/mail");
const asyncSQL = require("../functions/db");
const { encrypt } = require("../functions/encrypt");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post("/auth_mail", (req, res) => {
  const { email } = req.body;
  const rnd = randomNumber();

  asyncSQL(
    `INSERT INTO auth (a_email, a_digit) VALUES ("${email}", "${rnd}";)`,
    (err1, rows) => {
      console.log(err1);
      console.log(rows.affectedRows);
      if (err1 || rows.affectedRows < 1) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
      } else {
        sendMail(email, rnd, (err2, info) => {
          console.log(err2);
          console.log(info);
          if (err2) {
            res.status(500).json({
              status: "fail",
              message: "서버에서 에러가 발생 하였습니다.",
            });
          } else {
            res.status(201).json({
              status: "success",
              message: "성공되었습니다.",
            });
          }
        });
      }
    }
  );
});

// router.post("/auth_mail", async (req, res) => {
//   const userEmail = req.body.email;
//   const rnd = randomNumber();

//   await asyncSQL(
//     `INSERT INTO auth (a_email, a_digit) VALUES ("${userEmail}", "${rnd}")`
//   );
//   await sendMail(userEmail, rnd);
//   res.status(201).json({
//     status: "success",
//     message: "성공되었습니다.",
//   });
// });

router.get("/auth_valid", (req, res) => {
  const { email, digit } = req.query;

  asyncSQL(
    `SELECT a_id, a_digit FROM auth WHERE a_email = "${email}" AND a_is_used = 0 ORDER BY a_id DESC LIMIT 1;`,
    (err, rows) => {
      if (rows.length > 0) {
        if (digit.toString() === rows[0].a_digit.toString()) {
          asyncSQL(
            `UPDATE auth SET a_is_used = 1 WHERE a_id = "${rows[0].a_id}"`
          );
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
      } else {
        res.status(200).json({
          status: "fail",
          message: "이메일이 존재하지 않습니다.",
        });
      }
    }
  );
});

// router.get("/auth_valid", async (req, res) => {
//   const { email, digit } = req.query;

//   await asyncSQL(
//     `SELECT a_id, a_digit FROM auth WHERE a_email = "${email}" AND a_is_used = 0 ORDER BY a_id DESC LIMIT 1`
//   ).then(async (rows) => {
//     if (digit.toString() === rows[0].a_digit.toString()) {
//       await asyncSQL(
//         `UPDATE auth SET a_is_used = 1 WHERE a_id = ${rows[0].a_id}`
//       );
//       res.status(200).json({
//         status: "success",
//         message: "일치 합니다.",
//       });
//     } else {
//       res.status(200).json({
//         status: "fail",
//         message: "일치하지 않습니다.",
//       });
//     }
//   });
// });

router.post("/register", (req, res) => {
  const { email, pwd, nick, name } = req.body;
  const encryptPwd = encrypt(pwd);

  asyncSQL(
    `INSERT INTO user (u_email, u_pwd, u_name, u_nick) VALUES ("${email}", "${encryptPwd}", "${name}", "${nick}");`,
    (err, rows) => {
      if (err || rows.affectedRows < 1) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
      } else {
        res.status(201).json({
          status: "success",
          message: "성공되었습니다.",
        });
      }
    }
  );
});

router.post("/login", (req, res) => {
  const { email, pwd } = req.body;
  console.log(email, pwd);
  const encryptPwd = encrypt(pwd);

  asyncSQL(
    `SELECT u_pwd FROM user WHERE u_email = "${email}";`,
    (err, rows) => {
      console.log(rows);
      if (err) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
      } else if (rows.length > 0) {
        if (rows[0].u_pwd === encryptPwd) {
          res.status(200).json({
            status: "success",
            message: "로그인 성공",
          });
        } else {
          res.status(200).json({
            status: "fail",
            message: "비밀번호를 찾을 수 없습니다.",
          });
        }
      } else {
        res.status(200).json({
          status: "fail",
          message: "이메일을 찾을 수 없습니다.",
        });
      }
    }
  );
});

// 비밀번호를 변경하는 로직은 2가지가 있다.
// 인증키 입력으로 새 비밀번호 입력
// 임시 비밀번호 발급
router.put("/changePwd", (req, res) => {
  const { email, pwd } = req.body;
  if (!email && !pwd) {
    res.status(400).json({
      status: "fail",
    });
  }
  const encryptPwd = encrypt(pwd);

  asyncSQL(
    `UPDATE user SET u_pwd = "${encryptPwd}" WHERE u_email = "${email}";`,
    (err, rows) => {
      console.log(rows);
      if (err) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
      } else if (rows.affectedRows > 0) {
        res.status(200).json({
          status: "success",
          message: "성공적으로 바뀌었습니다.",
        });
      } else {
        res.status(200).json({
          status: "fail",
          message: "이메일을 찾을 수 없습니다.",
        });
      }
    }
  );
});

module.exports = router;
