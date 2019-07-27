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
          (e, response) => {
            if(e) return reject(e);
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
        (e, respone) => {
          if(e) return reject(e);
          resolve({ success: true })
        }
      )
    })
  }

  // Get account
  static get_account({ email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id, first_name, last_name, email, password FROM account WHERE email=$1',
        [email],
        (e, response) => {
          if(e) return reject(e);
          resolve({ account: response.rows[0] });
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
        (e, response) => {
          if(e) return reject(e);
          resolve({ success: true });
        }
      )
    });
  };

  // Get all account data
  static get_all_account_data({ email }) {
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
        (e, response) => {
          if(e) return reject(e);
          resolve(response.rows)
        }
      )
    })
  }

};


module.exports = AccountTable;