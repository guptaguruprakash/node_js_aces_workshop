const express =require("express")
const connectToDb =require("./database/databaseConnection")
const Blog = require("./model/blogModel")
const app =express()
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set('view engine','ejs')

app.listen(3000,()=>{ 
    console.log("Nodejs has started",+3000)})
app.get("/",(req,res)=>{
    res.send("<h1>this is message</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>this is about</h1>")
    
})


app.get("/ejs",(req,res)=>{

    res.render("about.ejs")
    
})
app.get("/blog",(req,res)=>{
    res.render("createblog.ejs")
})
app.get("/contact",(req,res)=>{
    const data="access workshop"
    res.render("contact.ejs",{data})
    
})
app.post("/createblog",async (req,res)=>{
    //console.log(req.body)
    //const title =req.body.tile
    //const subtitle=req.body.subtitle
    //const decription=req.body.description
    //const subtitle=req.body.subtitle
    //const image=req.body.image
    const {title,subtitle,description}=req.body
    console.log(title,subtitle,description)
    await Blog.create({
        title,
        subtitle,
        description
    })
    
    res.send("post hitted")
})