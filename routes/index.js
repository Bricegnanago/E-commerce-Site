const express = require('express')
var router = express.Router()
var Cart = require('../models/cart')
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
router.get('/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {items : {}})
  Product.findById(productId, (err, product) =>{
    if (err) {
      return res.redirect('/')
    }
    cart.add(product, product.id)
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/')
  })
})

router.get('/shopping-cart', (req, res, next) => {
  if(!req.session.cart){
    return res.render('shop/shopping-cart', {product : null})
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {products : cart.genrateArray(), totalPrice : cart.totalPrice})
})

module.exports = router
