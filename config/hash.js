const CryptoJS = require('crypto-js');

const keySize = 256 / 32;
const iterations = 100;

const encrypt = (word, secretOrKey) => {
  const salt = CryptoJS.lib.WordArray.random(128/8);
  const key = CryptoJS.PBKDF2(secretOrKey, salt, { keySize, iterations });

  const iv = CryptoJS.lib.WordArray.random(128/8);
  const encrypted = CryptoJS.AES.encrypt(word, key, { 
    iv, 
    padding:CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });

  const transitmessage = salt.toString() + iv.toString() + encrypted.toString();
  return transitmessage;
};

const decrypt = ( hash_word, secretOrKey) => {
  const salt = CryptoJS.enc.Hex.parse(hash_word.substr(0, 32));
  const iv = CryptoJS.enc.Hex.parse(hash_word.substr(32, 32));
  const encrypted = hash_word.substring(64);
  const key = CryptoJS.PBKDF2(secretOrKey, salt, {
    keySize,
    iterations
  });

  return CryptoJS.AES.decrypt(encrypted, key, { 
    iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC 
  }).toString(CryptoJS.enc.Utf8);
};

module.exports = { encrypt, decrypt };