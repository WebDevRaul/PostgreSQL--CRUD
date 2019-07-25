const { Router } = require('express');
const router = new Router;
const CrudTable = require('../account/crud');


router.post('/add-item', (req, res, next) => {
  const { account_id, text } = req.body;

  CrudTable.storeText({ account_id, text })
    .then(text => res.json(text))
    .catch(e => next(e))
})

module.exports = router;