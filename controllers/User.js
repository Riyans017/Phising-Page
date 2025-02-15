const User = require('../models/User')

async function getAllInfo(req,res){
    const {email,password} = req.body;

    const created_user = await User.create({
        email:email,
        password:password
    })
    if(!created_user){
        return res.redirect('/')
    }
    return res.redirect('/login')
}


async function redirectAgainUser(req,res){
    const {email,password} = req.body;
    if(email && password){
        return res.redirect('/login')
    }
    
}


module.exports = {
    getAllInfo,
    redirectAgainUser
}