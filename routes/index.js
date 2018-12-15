const express = require('express')
var router = express.Router()

var Product = require('../models/product')

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs) => {
    var productChunks = []
    var chunkSize = 3;
    for (let index = 0; index < docs.length; index += chunkSize) {
      productChunks.push(docs.slice(index, index + chunkSize));      
    }
    res.render('shop/index',{title: 'Shopping Cart',
    products : productChunks })
  })
})

module.exports = router
