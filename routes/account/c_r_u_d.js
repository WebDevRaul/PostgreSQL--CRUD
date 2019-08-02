const pool = require('../../pool');

class TextTable {

  // Store text
  static create_post({ id, post }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO posts(account_id, post) VALUES($1, $2)',
        [id, post],
        (error, response) => {
          if(error) return reject(error);
          resolve({ message: true });
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
        (error, response) => {
          if(error) return reject(error);
          resolve({ post: response.rows });
        }
      )
    });
  };


  // Delete 1 post
  static delete_post({ id }) {
    return new Promise(( resolve, reject ) => {
      pool.query(
        'DELETE FROM posts WHERE id=$1',
        [id],
        (error, response) => {
          if(error) return reject(error);
          resolve({ success: true });
        }
      )
    });
  };

  // Delete All
  static delete_all_posts({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'DELETE FROM posts WHERE account_id=$1',
        [id],
        (error, response) => {
          if(error) return reject(error);
          resolve({ success: true });
        }
      )
    });
  };

  static update_post({ id, post }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE posts SET post=$2 WHERE id=$1 RETURNING post, id',
        [id, post],
        (error, response) => {
          if(error) return reject(error);
          resolve({ post: response.rows[0] })
        }
      );
    });
  };

}

module.exports = TextTable;