const express = require('express')
const router = express.Router()
const controller = require('../controller/index.controller')

//import { cards } from './dataProducts';
cards = require('./dataProducts');


router.get('/',(req, res) => {
   cards = Object.values(cards)
   
   res.render('home',{ cards: cards} )});
router.get('/home', (req, res) => {

cards = Object.values(cards)

res.render('home',{layout: false, cards: cards})
   });

router.get('/alta', controller.alta);
router.get('/contact', controller.contact)
router.get('/about', controller.about)

module.exports = router

