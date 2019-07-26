const { Router } = require('express');
const router = new Router;
const CrudTable = require('../account/crud');
const AccountTable = require('../account/account');


// Store text
router.post('/add-text', (req, res, next) => {
  const { account_id, text } = req.body;
  
  AccountTable.getAccountById({ id: account_id })
    .then(({ success }) => {
      // No account return error
      if(!success) return res.status(404).json({ message: 'Error!' });
      // Continue to store text
      CrudTable.storeText({ account_id, text })
      .then(({ message }) => res.json(message))
      .catch(e => next(e))
    })
    .catch(e => next(e));
})

// Get text
router.get('/recover-text', (req, res, next) => {
  const { account_id } = req.body;
  
  AccountTable.getAccountById({ id: account_id })
    .then(({ id }) => {
      // No account return error
      if(!id) return res.status(404).json({ message: id });
      // Continue to fetch the text
      CrudTable.recoverText({ account_id })
        .then(({ text }) => res.json({ text }))
        .catch(e => next(e));
    })
    .catch(e => next(e))
});

module.exports = router;