const pool = require('../../pool');

class CrudTable {

  // Store text
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
    });
  };

  // Get text
  static recoverText({ account_id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT text FROM crud WHERE account_id=$1',
        [account_id],
        (e, response) => {
          if(e) return reject(e);
          resolve({ text: response.rows });
        }
      )
    });
  };
}

module.exports = CrudTable;