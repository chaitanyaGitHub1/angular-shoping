
var express = require('express');
var router = express.Router();



const Item = require('../model/shoppinglist');

//retrieving data from database
router.get('/items',(req,res,next)=>{
Item.find(function(err, items){
  if(err){
    res.json(err);
  }
  else{
    res.json(items);
  }
});

});

//Inserting the data
router.post('/item',(req,res,next)=>{
    let newShoppingItem = new Item({
      itemName: res.body.itemName,
      itemQuantity: res.body.itemQuantity,
      itemBought: res.body.itemBought
    });
    newShoppingItem.save((err,item) =>{
      if(err){
        res.json(err);

      }else {
        res.json({mes: 'Item has added sucessfully'});
      }
    });

});


router.put('/put_route',(req,res,next)=>{

});

router.delete('/delete_route',(req,res,next)=>{

});





module.exports = router;
