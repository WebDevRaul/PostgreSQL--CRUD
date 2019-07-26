const { Router } = require('express');
const router = new Router;
const TextTable = require('../account/c_r_u_d');
const AccountTable = require('../account/account');


// CREATE text
router.post('/add-text', (req, res, next) => {
  const { account_id, text } = req.body;
  
  AccountTable.get_account_by_id({ id: account_id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: 'Error!' });
      // Continue to store text
      TextTable.create_text({ account_id, text })
      .then(({ message }) => res.json(message))
      .catch(e => next(e))
    })
    .catch(e => next(e));
})

// Read text
router.get('/recover-text', (req, res, next) => {
  const { account_id } = req.body;
  
  AccountTable.get_account_by_id({ id: account_id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: success });
      // Continue to fetch the text
      TextTable.recover_text({ account_id })
        .then(({ text }) => res.json({ text }))
        .catch(e => next(e));
    })
    .catch(e => next(e))
});


router.get('/all-account', (req, res, next) => {
  const { id } = req.body;
  
  AccountTable.get_all_account_data({ id })
    .then(acc => res.json(acc))
    .catch(e => next(e))
});



module.exports = router;