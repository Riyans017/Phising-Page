const express = require('express')
const { getAllInfo,
    redirectAgainUser}  = require('../controllers/User')
const router = express.Router()

router.post('/',getAllInfo)
router.post('/redirect',redirectAgainUser)

module.exports = router;