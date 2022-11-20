// import sha512 from "crypto-js/sha512";
const sha512 = require("crypto-js/sha512");

function encrypt(message) {
  return sha512(message).toString();
}

module.exports = { encrypt };
