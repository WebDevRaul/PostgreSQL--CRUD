const { Router } = require('express');
const router = new Router;
const TextTable = require('../account/c_r_u_d');
const AccountTable = require('../account/account');


// CREATE text
router.post('/add-post', (req, res, next) => {
  const { account_id, post } = req.body;
  
  AccountTable.get_account_by_id({ id: account_id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: 'Error!' });
      // Continue to store text
      TextTable.create_post({ account_id, post })
      .then(({ message }) => res.json(message))
      .catch(e => next(e))
    })
    .catch(e => next(e));
})

// Read text
router.get('/recover-post', (req, res, next) => {
  const { account_id } = req.body;
  
  AccountTable.get_account_by_id({ id: account_id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: success });
      // Continue to fetch the text
      TextTable.recover_post({ account_id })
        .then(({ post }) => res.json({ post }))
        .catch(e => next(e));
    })
    .catch(e => next(e))
});

module.exports = router;