const pool = require('../../pool');


class AccountTable {
  
  // STORE Account
  static storeAccount({ first_name, last_name, email, password }) {
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

  // GET Account
  static getAccount({ email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id, first_name, last_name, email, password FROM account WHERE email=$1',
        [email],
        (error, response) => {
          if(error) return reject(error);
          resolve({ account: response.rows[0] });
        }
      )
    });
  };

  // Get Account by ID
  static getAccountById({ id }) {
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