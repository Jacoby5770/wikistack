const express = require('express');
const router = express.Router()
const model = require('../models')
const { addPage, editPage, main, userList, userPages, wikiPage } = require("../views");

router.get('/', (req, res, next) => {
	res.send(addPage(""));

})

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send();
})

router.get('/add', (req, res, next) => {
    res.send(addPage());

})

router.get('/users/', (req, res, next) => {
    model.User.findAll()
})

router.get('/users/:id', (req, res, next) => {
    model.User.findById(req.params.id);
})

router.post('/users/', (req, res, next) => {
})

router.put('/users/:id', (req, res, next) => {

})

router.delete('/users/:id', (req, res, next) => {
    //req.params.id
})

module.exports = router;
