const pool = require('../../pool');

class TextTable {

  // Store text
  static create_post({ id, post }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO posts(account_id, post) VALUES($1, $2)',
        [id, post],
        (e, response) => {
          if(e) return reject(e);
          resolve({ message: true })
        }
      )
    });
  };

  // Get text
  static recover_post({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT post, id FROM posts WHERE account_id=$1',
        [id],
        (e, response) => {
          if(e) return reject(e);
          resolve({ post: response.rows });
        }
      )
    });
  };
}

module.exports = TextTable;