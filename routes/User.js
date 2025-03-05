const express=require('express')
const app=express();
const post=require('../')

router.get('/',async(req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }
    catch(err){{
        res.status(500).json({message:err.message})
    }}
});