const express = require("express");
const { sendMail, randomNumber } = require("../functions/mail");
const asyncSQL = require("../functions/db");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post("/auth_mail", (req, res) => {
  const { email } = req.body;
  const rnd = randomNumber();

  asyncSQL(
    `INSERT INTO auth (a_email, a_digit) VALUES ("${email}", "${rnd}")`,
    (err, rows) => {
      console.log(err);
      console.log(rows.affectedRows);
      if (err || rows.affectedRows < 1) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
      } else {
        sendMail(email, rnd, (err, info) => {
          console.log(err);
          console.log(info);
          if (err) {
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

router.get("/auth_valid", (req, res) => {});

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

router.post("/register", (req, res) => {});

module.exports = router;
