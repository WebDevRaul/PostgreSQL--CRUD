const pool = require('../../pool');

class CrudTable {

  // Store item
  static storeText({ account_id, text }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO crud(account_id, text) VALUES($1, $2)',
        [account_id, text],
        (e, response) => {
          if(e) return reject(e);
          resolve({ message: 'Success!' })
        }
      )
    })
  }
}

module.exports = CrudTable;