const pool = require('../../pool');

class TextTable {

  // Store text
  static create_text({ account_id, text }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO user_text_table(account_id, user_text) VALUES($1, $2)',
        [account_id, text],
        (e, response) => {
          if(e) return reject(e);
          resolve({ message: 'Success!' })
        }
      )
    });
  };

  // Get text
  static recover_text({ account_id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT user_text FROM user_text_table WHERE account_id=$1',
        [account_id],
        (e, response) => {
          if(e) return reject(e);
          resolve({ text: response.rows });
        }
      )
    });
  };
}

module.exports = TextTable;