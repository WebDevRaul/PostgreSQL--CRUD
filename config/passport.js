const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const AccountTable = require('../routes/account/account');
const bcrypt = require('bcryptjs');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (email, password, done) => {
      AccountTable.getAccount({ email })
        .then(({ account }) => {
          const is_match = bcrypt.compareSync(password, account.password);
          if(account && is_match) return done(null, account);
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};