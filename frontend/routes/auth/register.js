const express = require('express')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const router = express.Router()

router.post('/api/users/register' ,(req, res) => {
    const {username, email, password} = req.body



})


module.exports = router