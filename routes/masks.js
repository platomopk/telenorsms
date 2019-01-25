const express = require('express');
const router = express.Router();
const Mask = require('../models/mask');

const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);


//register mask
router.post('/register', (req, res, next)=>{
    //res.send("Register");
    let newMask = new Mask({
        mask: req.body.mask,
        description:req.body.description,
        type:req.body.type,
        createdby:req.body.createdby,
        created:moment.utc().add(5,'hours').toDate(),
        status:'pending'
    });

    newMask.save((err,mask)=>{
        if(err){
            res.json({
                success:false
            });
        }else{
            res.json({
                success:true,
                mask:mask
            });
        }
    });
});

router.put('/allow', (req, res, next)=>{
    var id = req.body.id;
    Mask.findOneAndUpdate(
        {
            _id:id
        },
        {
            $set:{
                status:'activated'
            }
        },
        (err,doc)=>{
            if(err){
                res.json({success:false,err:err})
            }
            res.json({success:true,data:doc})
        }
    );
});

router.get('/pending',(req,resp)=>{
    Mask.find({status:'pending'},null,{sort:{created:-1}},(err,doc)=>{
        if(err){
            throw err;
        }else{
            //console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.get('/id/:id',(req,resp)=>{
    let query = {_id:req.params.id};
    Mask.findOne(query,(err,doc)=>{
        if(err){
            throw err;
        }else{
            //console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.get('/:email',(req,resp)=>{
    let query = {createdby:req.params.email};
    Mask.find(query,(err,doc)=>{
        if(err){
            resp.json({
                success:false,
                err:err
            });
        }else{
            //console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.get('/activated/:email',(req,resp)=>{
    let query = {createdby:req.params.email,status:'activated'};
    Mask.find(query,(err,doc)=>{
        if(err){
            resp.json({
                success:false,
                err:err
            });
        }else{
            //console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.delete('/:id',(req,resp)=>{
    let query = {_id:req.params.id};
    Mask.remove(query,(err)=>{
        if(err){
            resp.json({
                success:false,
                msg:'The mask was not deleted'
            });
        }else{
            resp.json({
                success:true,
                msg:'The mask was deleted'
            });
        }
    });
});






//export
module.exports = router;