import express from 'express';
const posts=[];
const app=express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/submission',(req,res)=>{
    res.render('submission.ejs');
})

app.get('/about',(req,res)=>{
    res.render('about.ejs');
})

app.post('/post',(req,res)=>{
    
    posts.push({ title:req.body.title, content: req.body.content });
    res.render('Successful.ejs');
})

app.get('/posts',(req,res)=>{
    res.render('posts.ejs',{titles:posts.map(p => p.title),posts:posts});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
