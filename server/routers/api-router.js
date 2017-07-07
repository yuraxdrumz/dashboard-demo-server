import express from 'express'
import jwt from 'express-jwt'
import config from '../config'

let auth = jwt({
  secret:config.jwtSecret,
  userProperty:'payload'
})

const router = express.Router()
router.use(auth)
const randomizer = () => Math.floor(Math.random() * 100000)


router.get('/impressions', (req, res, next) => {
  setTimeout(()=>{
    res.json({impressions:randomizer()})
  },1000)
})

router.get('/clicks', (req, res, next) => {
  res.json({clicks:randomizer()})
})

router.get('/ctrs', (req, res, next) => {
  res.json({ctrs:randomizer()})
})

router.get('/ecpms', (req, res, next) => {
  res.json({ecpms:randomizer()})
})

router.get('/linechart', (req, res, next) =>{
  res.json({graphNumbers:[100, 26, 45, 74, 20, 12, 60]})
})
router.get('/firstpie', (req, res, next) =>{
  res.json({firstPieNumbers:[ 20, 12, 60]})
})
router.get('/secondpie', (req, res, next) =>{
  res.json({secondPieNumbers:[100, 26, 45]})
})

router.get('/getwebsitesdata',(req, res, next) => {
  let data = {
    impressions:[randomizer(),randomizer(),randomizer(),randomizer(),randomizer()],
    clicks:[randomizer(),randomizer(),randomizer(),randomizer(),randomizer()],
    websites:[{id:1,name:'cnn.com'},{id:2,name:'ynet.co.il'},{id:3,name:'walla.co.il'},{id:4,name:'9gag.com'},{id:5, name:'github.com'}]
  }
  setTimeout(()=>{
    res.json({data})
  },1000)

})
router.get('/getwebsite/:id',(req, res, next) => {
  let data = {
    impressions:[randomizer(),randomizer(),randomizer(),randomizer(),randomizer()],
    clicks:[randomizer(),randomizer(),randomizer(),randomizer(),randomizer()],
    campaigns:[{id:1,name:'Nike'},{id:2,name:'Coca-Cola'},{id:3,name:'Wix'},{id:4,name:'Ubuntu'},{id:5, name:'Yossi Mazberim'}]
  }
  setTimeout(()=>{
    res.json({data})
  },1000)

})

export default router