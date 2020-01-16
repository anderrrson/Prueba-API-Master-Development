const {Router}= require('express');
const router = Router();
const _ = require('underscore');
const fetch = require('node-fetch');


var response;
var posts;


router.get('/',async (req,res)=>{
    response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
    res.json(posts);
});

router.post('/',(req,res)=>{
    console.log(req.body);
    const {UserId,title,body}=req.body;

    if(UserId&&id&&title&&body){
        const id=posts.length+1;
        const nuevoPosteo={...req.body,id};
        posteos.push(nuevoPosteo);
        res.json(posteos);

    }
    else{
        res.send('Wrong request');
    }
});

router.delete('/:id',(req,res)=>{
    res.json(posts);
    const {id}=req.params;
    _.each(posts,(posts,i)=>{
        if(posts.id==id){
            posts.splice(i,1);
        }
    });
    res.send(posts);


})

module.exports=router;