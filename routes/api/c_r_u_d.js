const { Router } = require('express');
const router = new Router;
const TextTable = require('../account/c_r_u_d');
const AccountTable = require('../account/account');


// CREATE text
router.post('/add-post', (req, res, next) => {
  const { id, post } = req.body;
  
  AccountTable.get_account_by_id({ id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: 'Error!' });
      // Continue to store text
      TextTable.create_post({ id, post })
      .then(({ message }) => {
        if(!message) return res.js({ error: 'An error has occurred.' });
        TextTable.recover_post({ id })
          .then(({ post }) => res.json({ post }))
      })
      .catch(e => next(e))
    })
    .catch(e => next(e));
})

// Read text
router.get('/post', (req, res, next) => {
  const { id } = req.body;
  
  AccountTable.get_account_by_id({ id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: success });
      // Continue to fetch the text
      TextTable.recover_post({ id })
        .then(({ post }) => res.json({ post }))
        .catch(e => next(e));
    })
    .catch(e => next(e))
});

module.exports = router;