const pool = require('../../pool');

class TextTable {

  // Store text
  static create_post({ account_id, post }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO posts(account_id, post) VALUES($1, $2)',
        [account_id, post],
        (e, response) => {
          if(e) return reject(e);
          resolve({ message: 'Success!' })
        }
      )
    });
  };

  // Get text
  static recover_post({ account_id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT post, id FROM posts WHERE account_id=$1',
        [account_id],
        (e, response) => {
          if(e) return reject(e);
          resolve({ post: response.rows });
        }
      )
    });
  };
}

module.exports = TextTable;