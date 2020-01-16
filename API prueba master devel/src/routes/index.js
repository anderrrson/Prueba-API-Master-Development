const {Router}=require('express');
const router = Router();
const fetch=require('node-fetch');

router.get('/',async (req,res)=>{
    //creamos una variable para requerir el link 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //declaramos una variable para devolver el contenido en un formato json
    const posts = await response.json();
    res.json(posts);
    
})

/*router.get('/',async (req,res)=>{
    const responses = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await responses.json();
    res.send('Estos son los comentarios');
    res.json(comments);
})*/



module.exports=router;