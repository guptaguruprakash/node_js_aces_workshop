require("dotenv").config()

const express =require("express")
const connectToDb =require("./database/databaseConnection")
const Blog = require("./model/blogModel")
const Form=require("./model/formmodel")
const Username=require("./model/usermodel")
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")
const {multer,storage}=require("./middleware/multerConfig.js");
const isAuthenticated = require("./middleware/isAuthenticated.js")
const upload=multer({storage : storage})
const app =express()
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set('view engine','ejs')
app.use(cookieParser())

app.get("/about",(req,res)=>{
    res.send("<h1>this is about</h1>")
    
})


app.get("/ejs",(req,res)=>{
    
    res.render("about.ejs")
    
})
app.get("/blog",isAuthenticated,(req,res)=>{
    res.render("createblog.ejs")
})
app.get("/contact",(req,res)=>{
    const data="access workshop"
    res.render("contact.ejs",{data})
    
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
    
})


app.post("/createblog",upload.single('image') ,async (req,res)=>{
    //console.log(req.body)
    //const title =req.body.tile
    //const subtitle=req.body.subtitle
    //const decription=req.body.description
    //const subtitle=req.body.subtitle
    //const image=req.body.image
    const file = req.file
    console.log(file)
    const {title,subtitle,description}=req.body
    console.log(title,subtitle,description)
    await Blog.create({
        title,
        subtitle,
        description,
        image : file.filename
    });
    
    res.send("post hitted")
})
app.post("/submitform",async (req,res)=>{
    //console.log(req.body)
    //const title =req.body.tile
    //const subtitle=req.body.subtitle
    //const decription=req.body.description
    //const subtitle=req.body.subtitle
    //const image=req.body.image
    const {name,email,message}=req.body
    console.log(name,email,message)
    
    await Form.create({
        name,
        email,
        message
    }
);

res.send("post hitted");
})
app.post("/registered",async (req,res)=>{

    const {username,password}=req.body

    
    await Username.create({
        username :username,
        password :bcrypt.hashSync(password,12),
    });
    res.redirect("/login")
});
app.post("/logined", async (req, res) => {
    const { username, password } = req.body;

    const user = await Username.find({ username: username });
    if (user.length == 0) {
        res.send("Invalid email");
    } else {
        const isMatched = bcrypt.compareSync(password, user[0].password);
        if (!isMatched) {
            res.send("Invalid password");
        } else {
            const token = jwt.sign({ userID: user[0]._id }, process.env.SECRET, {
                expiresIn: '20d'
            });
            res.cookie("token", token);
            res.send("logged in successfully");
        }
    }
});

app.use(express.static("./storage"))
app.get("/", async (req,res)=>{
    const blogs = await Blog.find()
    res.render("home.ejs", {blogs})
    
})
app.get('/myblog/:id',  async(req, res) => {
    // Assuming you have a Blog model
   const id=req.params.id
   const data= await Blog.findById(id)
   res.render('./blog.ejs',{data});
});
app.get("/register",(req,res)=>{
    res.render("./username.ejs")
    
})

app.get('/deletedata/:id',async(req,res)=>{
    const id=req.params.id
    const data = await  Blog.findByIdAndDelete(id)
    res.redirect("/")
});
app.get('/editdata/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Blog.findById(id)
        if (!data) {
            return res.status(404).send('Blog post not found');
        }
        res.render("./edit.ejs", { data });
    } catch (error) {
        res.status(500).send('Server error');
    }

app.post("/editdata/:id",async (req,res)=>{
      
       const id=req.params.id
        const {title,subtitle,description}=req.body
        
        await Blog.findByIdAndUpdate(id,{
            title,
            subtitle,
            description

        })
        res.redirect('/myblog/'+id)
})
})
   
app.listen(3000,()=>{ 
    console.log("Nodejs has started on port 3000");
});
