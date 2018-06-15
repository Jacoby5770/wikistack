const express = require('express');
const router = express.Router()

module.exports = router;

router.get('/', (req, res, next) => {
    res.send("hi");
})

router.post('/', (req, res, next) => {
    res.send("post");

})

router.get('/add', (req, res, next) => {
    res.send("add");

})