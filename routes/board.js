const express = require("express");
const asyncSQL = require("../functions/db");

const router = express.Router();

router.post("/write", (req, res) => {
  // 비 구조화 할당
  // 이름이 같아야되요
  const { userId, content } = req.body;
  if (!userId || !content) {
    res.status(400).end();
  }

  asyncSQL(
    `INSERT INTO board (b_content, b_uid) VALUES ("${content}", "${userId}")`,
    (err, rows) => {
      if (err || rows.affectedRows < 1) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 했습니다.",
        });
        if (process.env.NODE_ENV === "development") {
          console.error(err);
        }
      } else {
        res.status(201).json({
          status: "success",
          message: "성공되었습니다.",
        });
      }
    }
  );
});

// 특정 사용자의 글 조회
// select 사용자 닉네임 + 게시판 글 + 생성일자
// http://localhost:3000/boadrd/get?id=1
// http://localhost:3000/boadrd/get/1
router.get("/get/:uid", (req, res) => {
  const { uid } = req.params;
  let { page, count } = req.query;
  if (!uid) {
    res.status(400).end();
  }
  if (!count) {
    count = 10;
  }
  if (!page || page < 1) {
    page = 0;
  }

  asyncSQL(
    `SELECT 
      a.u_nick as nick,
      b.b_id as bid,
      b.b_content as content,
      b.b_date as date
    FROM board b JOIN user a
    ON b.b_uid = a.u_id
    WHERE b_uid = "${uid}"
    ORDER BY b_date DESC
    LIMIT ${page * count}, ${count}`,
    (err, rows) => {
      if (err) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
        if (process.env.NODE_ENV === "development") {
          console.error(err);
        }
      } else {
        res.status(200).json({
          status: "success",
          content: rows,
        });
      }
    }
  );
});

// 팔로워 한 사람들 글 조회
router.get("/get/follow/:uid", (req, res) => {
  const { uid } = req.params;
  let { count } = req.query;
  if (!uid) {
    res.status(400).end();
  }
  if (!count) {
    count = 10;
  }

  asyncSQL(
    `SELECT
      b.b_id as bid
      a.u_nick as nick,
      b.b_content as content,
      b.b_date as date
    FROM board b JOIN user a
    ON b.b_uid = a.u_id
    WHERE b.b_uid IN (SELECT f_ing FROM follow WHERE f_er = ${uid})
    ORDER BY b_date DESC
    LIMIT ${count}`,
    (err, rows) => {
      if (err) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
        if (process.env.NODE_ENV === "development") {
          console.error(err);
        }
      } else {
        res.status(200).json({
          status: "success",
          content: rows,
        });
      }
    }
  );
});

// 내가 지금 팔로잉 한 사람이 없으면
// 글이 0개 이것은 어떻게 할 것인가?
router.get("/get/any", (req, res) => {
  const { count } = req.query;

  asyncSQL(
    `
    SELECT
      b.b_id as bid,
      a.u_nick as nick,
      b.b_content as content,
      b.b_date as date
    FROM board b JOIN user a
    ON b.b_uid = a.u_id
    WHERE b_uid > 0
    ORDER BY b_date DESC
    LIMIT ${count};
  `,
    (err, rows) => {
      if (err) {
        res.status(500).json({
          status: "fail",
          message: "서버에서 에러가 발생 하였습니다.",
        });
        if (process.env.NODE_ENV === "development") {
          console.error(err);
        }
      } else {
        console.log("1111");
        console.log(rows);
        res.status(200).json({
          status: "success",
          content: rows,
        });
      }
    }
  );
});

// 특정 개수 조회했는데 10개 안되서 부족한거 채울 때
// not을 써서 해당 유저 이외 조회
// router.get("/get/any/:uid", (req, res) => {
//   const { uid } = req.params;

//   asyncSQL(
//     `SELECT
//       a.u_nick as nick,
//       b.b_content as content,
//       b.b_date as date
//     FROM board b JOIN user a
//     ON b.b_uid = a.u_id
//     WHERE b.b_uid NOT IN (SELECT f_ing FROM follow WHERE f_er = ${uid})
//     ORDER BY b_date DESC
//     LIMIT 10`,
//     (err, rows) => {
//       if (err) {
//         res.status(500).json({
//           status: "fail",
//           message: "서버에서 에러가 발생 하였습니다.",
//         });
//         if (process.env.NODE_ENV === "development") {
//           console.error(err);
//         }
//       } else {
//         res.status(200).json({
//           status: "success",
//           content: rows,
//         });
//       }
//     }
//   );
// });

// 글 수정
// 진짜 글 작성한 사람이 맞는지 확인
router.put("/fix/:bid", (req, res) => {
  const { bid } = req.params;
  const { content, uid } = req.body;

  asyncSQL(`SELECT b_uid FROM board WHERE b_id = "${bid}"`, (err, rows) => {
    if (err) {
      res.status(500).json({
        status: "fail",
        message: "서버에서 에러가 발생 하였습니다.",
      });
      if (process.env.NODE_ENV === "development") {
        console.error(err);
      }
    } else if (rows.length > 0) {
      if (rows[0].b_uid === Number(uid)) {
        asyncSQL(
          `UPDATE board SET b_content = "${content}" WHERE b_id = "${bid}"`,
          (err1, rows1) => {
            if (err1) {
              res.status(500).json({
                status: "fail",
                message: "서버에서 에러가 발생 하였습니다.",
              });
              if (process.env.NODE_ENV === "development") {
                console.error(err);
              }
            } else if (rows1.affectedRows > 0) {
              res.status(200).json({
                status: "success",
                message: "성공적으로 바뀌었습니다.",
              });
            } else {
              res.status(200).json({
                status: "fail",
                message: "정상적으로 수행을 하지 못하였습니다.",
              });
            }
          }
        );
      } else {
        res.status(403).end();
      }
    } else {
      res.status(403).end();
    }
  });
});

// 글 삭제
router.delete("/delete/:bid", (req, res) => {
  // const bid = req.params.bid
  const { bid } = req.params;
  const { uid } = req.body;

  asyncSQL(`SELECT b_uid FROM board WHERE b_id = "${bid}"`, (err, rows) => {
    if (err) {
      res.status(500).json({
        status: "fail",
        message: "서버에서 에러가 발생 하였습니다.",
      });
      if (process.env.NODE_ENV === "development") {
        console.error(err);
      }
    } else if (rows.length > 0) {
      if (rows[0].b_uid === Number(uid)) {
        asyncSQL(`DELETE FROM board WHERE b_id = "${bid}"`, (err1, rows1) => {
          if (err1) {
            res.status(500).json({
              status: "fail",
              message: "서버에서 에러가 발생 하였습니다.",
            });
            if (process.env.NODE_ENV === "development") {
              console.error(err);
            }
          } else if (rows1.affectedRows > 0) {
            res.status(200).json({
              status: "success",
              message: "성공적으로 바뀌었습니다.",
            });
          } else {
            res.status(200).json({
              status: "fail",
              message: "정상적으로 수행을 하지 못하였습니다.",
            });
          }
        });
      } else {
        res.status(403).end();
      }
    } else {
      res.status(403).end();
    }
  });
});


module.exports = router;
