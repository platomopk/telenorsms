const express = require('express');
const router = express.Router();


const Tracker = require('../models/tracker');
const Mask = require('../models/mask');

const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);


//register mask
router.post('/register', (req, res, next)=>{
    //res.send("Register");
    let newIssue = new Tracker({
        maskforiegn: req.body.maskforiegn,
        maskname: req.body.maskname,
        feature:req.body.feature,
        problem:req.body.problem,
        remarks:req.body.remarks,
        createdby:req.body.createdby,
        created:moment.utc().add(5,'hours').toDate(),
        status:'Pending'
    });

    newIssue.save((err,issue)=>{
        if(err){
            throw err;
        }else{
            res.json({
                success:true,
                issue:issue
            });
        }
    });
});


router.get('/:email',(req,resp)=>{
    let query = {createdby:req.params.email};
    Tracker.find(query,null,{sort:{created:-1}},(err,doc)=>{
        
        resp.json({
            success:true,
            data:doc
        });
        
    });
});

router.get('/',(req,resp)=>{
    let query = {status:'Pending'};
    Tracker.find(query,null,{sort:{created:-1}},(err,doc)=>{
        
        resp.json({
            success:true,
            data:doc
        });
        
    });
});

router.put('/resolve',(req,res)=>{
    let id = req.body.id;

    Tracker.findOneAndUpdate(
        {
            _id:id
        },
        {
            $set:{
                status:'Resolved'
            }
        },
        (err,doc)=>{
            if(err){
                res.json({
                    success:false,
                    error:err
                })
            }
            res.json({
                success:true,
                data:doc
            })
        }
    )

})

router.delete('/:id',(req,resp)=>{
    let query = {_id:req.params.id};
    Tracker.remove(query,(err)=>{
        if(err){
            resp.json({
                success:false,
                msg:'The issue was not deleted'
            });
        }else{
            resp.json({
                success:true,
                msg:'The issue was deleted'
            });
        }
    });
});






//export
module.exports = router;