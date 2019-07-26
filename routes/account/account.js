const pool = require('../../pool');


class AccountTable {
  
  // STORE Account
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

  // GET Account
  static get_account({ email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT password FROM account WHERE email=$1',
        [email],
        (e, response) => {
          if(e) return reject(e);
          resolve({ account: response.rows[0] });
        }
      )
    });
  };

  // Get Account by ID
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

};


module.exports = AccountTable;