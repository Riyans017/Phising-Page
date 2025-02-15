const express  = require('express')
const User = require('../models/User')

const router = express.Router()

router.get('/facebook',(req,res)=>{
    res.render('Facebook')
})
router.get('/login',(req,res)=>{
    return res.render('Logged')
})
router.get('/user',async(req,res)=>{
    const all_user = await User.find({})
    return res.render('User',{
        user:all_user
    })
})

router.get('/prize',(req,res)=>{
    return res.status(200).render('Winner')
})

router.get('/loader',(req,res)=>{
    return res.render('Prize')
})

router.get('/',async(req,res)=>{
    return res.render('Home')
})

module.exports  = router;