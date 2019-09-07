const pool = require('../../pool');


class AccountTable {
  
  // Create account
  static create_account({ first_name, last_name, email, password }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO account(
          first_name,
          last_name,
          email,
          password
          )
          VALUES($1, $2, $3, $4)`,
          [first_name, last_name, email, password],
          (error, response) => {
            if(error) return reject(error);
            resolve({ message: 'You have successfully registered!' })
          }
      )
    });
  };

  // Check account
  static check_account({ email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT email FROM account WHERE email=$1',
        [email],
        (error, respone) => {
          if(error) return reject(error);
          resolve({ account: respone.rows[0] })
        }
      )
    })
  }

  // Get all account data
  static get_account({ email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT
          account.id,
          first_name,
          last_name,
          email,
          password,
          post,
          posts.id post_id
          FROM account LEFT JOIN posts ON account.id = posts.account_id
          WHERE email = $1
        `,
        [email],
        (error, response) => {
          if(error) return reject(error);
          const data = response.rows;
          // Return just 1 row of account data and 1 array of posts
          const { id, first_name, last_name, email, password } = data[0];
          let posts = [];
          data.map(({ post, post_id }) => posts.push({ post, post_id }))
          
          const account = { id, first_name, last_name, email, password, posts };
          resolve({ account })
        }
      )
    });
  };

  // Get account by ID
  static get_account_by_id({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id FROM account WHERE id=$1',
        [id],
        (error, response) => {
          if(error) return reject(error);
          resolve({ success: true });
        }
      )
    });
  };

};


module.exports = AccountTable;