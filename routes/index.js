var express = require('express');
var router = express.Router();
var User = require('../Models/userSchema');

/* GET home page. */
router.post('/storedata', async function(req, res, next) {
  
  console.log(req.body);
  try {

    var data = await User.create(req.body);
    res.status(201).json({
      status:"success",
      data:data
    })
    
  } catch (error) {

      res.json({
        error
      })
  }

});


router.get('/getdata', async function(req, res, next) {
  try {

    var data = await User.find();
    res.status(200).json({
      status:"success",
      data:data
    })
    
  } catch (error) {

      res.json({
        error
      })
  }

});

router.get('/getdata/:id', async function(req, res, next) {
  
 console.log(req.params.id);
  try {

    var data = await User.findById(req.params.id);
    res.status(200).json({
      status:"success",
      data:data
    })
    
  } catch (error) {

      res.json({
        error
      })
  }

});


router.delete('/deletedata/:id', async function(req, res, next) {
  
  console.log(req.params.id);
   try {
 
     var data = await User.findByIdAndDelete(req.params.id);
     res.status(200).json({
       status:"success",
       
     })
     
   } catch (error) {
 
       res.json({
         error
       })
   }
 
 });

 router.patch('/updatedata/:id', async function(req, res, next) {
  
  console.log(req.params.id);
   try {
 
     var data = await User.findByIdAndUpdate(req.params.id,req.body);
     res.status(200).json({
       status:"success",
       
     })
     
   } catch (error) {
 
       res.json({
         error
       })
   }
 
 });

module.exports = router;
