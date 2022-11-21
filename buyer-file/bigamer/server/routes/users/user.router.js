const {createUser, loginUser} = require('./user.controller')
const router = require('express').Router()

router.post("/", createUser)
router.post("/login", loginUser)

module.exports = router