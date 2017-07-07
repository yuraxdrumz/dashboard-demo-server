import { Strategy } from 'passport-local'

export default function Auth(passport){

  passport.use('local-login', new Strategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {

      let user = {
        email,
        created:'A long long time ago'
      }
      return done(null, user)

    }))
};