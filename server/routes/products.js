const express = require('express')
const router =express.Router()
const Product = require('../model/product')



router.get('',function(req,res){
    Product.find({},function(err,foundProducts){
        return res.json(foundProducts)

    })
})

router.get('/:productId',function(req,res){
    const productId =req.params.productId
    Product.findById(productId,function(err,foundProducts){
        if(err){
            return res.status(422).send({errors:[{title:'Product error',detail:'Product not dound!'}]})
        }
 
       return res.json(foundProducts)

    })
})

module.exports =router