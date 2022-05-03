import pbkdf2 from "crypto-js/pbkdf2";
import CryptoJS from "crypto-js";

export default (password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pass = pbkdf2(
        password,
        Math.random().toString(),
        1000,
        16,
        "sha512"
      ).toString(CryptoJS.enc.Hex);
      resolve(pass);
    }, 2000);
  });
};
