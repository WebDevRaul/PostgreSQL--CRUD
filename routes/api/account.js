const { Router } = require('express');
const router = new Router;
const AccountTable = require('../account/account');
const validateRegisterForm = require('../../validation/register');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');


// Encryt && Decrypt
const { encrypt, decrypt } = require('../../config/hash');
const { secretOrKey } = require('../../config/keys');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// Register
router.post('/register', (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;

  // Validate Register Form 
  const { errors, isValid } = validateRegisterForm(req.body);
  if(!isValid) return res.status(400).json(errors);

  // Encrypting
  const first_name_hash = encrypt(first_name, secretOrKey);
  const last_name_hash = encrypt(last_name, secretOrKey);
  const password_hash = bcrypt.hashSync(password, salt);

  // Store account
  AccountTable.get_account({ email })
    .then(({ account }) => {
      if(account) return res.status(409).json({ email: 'Email is already in use!' });
      return AccountTable.create_account({ 
        first_name: first_name_hash,
        last_name: last_name_hash,
        email,
        password: password_hash
      })
      .then(({ message }) => res.json({ message }))
      .catch(error => next(error))
    });
});

// Sign In
router.post('/sign-in', (req, res, next) => {
  const { email, password } = req.body;

  AccountTable.get_account({ email })
    .then(({ account }) => {
      if(!account) {
        return res.status(409).json({ email: 'Incorrect email or password!', password: 'Incorrect email or password!' })
      }
      // Compare passwords
      const is_match = bcrypt.compareSync(password, account.password);

      if(account && is_match) {
        const user = { 
          id: account.id, 
          first_name:  decrypt(account.first_name, secretOrKey), 
          last_name: decrypt(account.last_name, secretOrKey), 
          email
        };
        jwt.sign(
          user,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (error, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(409).json({ email: 'Incorrect email or password!', password: 'Incorrect email or password!' })
      }
    })
    .catch(error => next(error))
})

module.exports = router;