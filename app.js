const express =require("express")
const app =express()
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
app.get("/contact",(req,res)=>{
    const data="access workshop"
    res.render("contact.ejs",{data})
    
})