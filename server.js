import express from 'express'
import config from './server/config'
import passport from 'passport'
import Auth from './server/config/passport'
import authRouter from './server/routers/auth-router'
import apiRouter from './server/routers/api-router'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
const app = express()
Auth(passport)

app.use(passport.initialize());
app.use(compression())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/auth', authRouter(passport))
app.use('/api', apiRouter)
app.listen(config.port,()=>console.log(`listening on port ${config.port}`))