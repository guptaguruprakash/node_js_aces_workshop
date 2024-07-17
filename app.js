require("dotenv").config()
const express = require("express")
const connectToDb = require("./database/databaseConnection")
const Blog = require("./model/blogModel")
const bcrypt = require('bcrypt')
const multer = require('multer')
const path = require('path')

const app = express() 
const cookieParser = require('cookie-parser')

app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'storage/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage })

const User = require("./model/userModel")
const Form = require('./model/formmodel')
const jwt = require("jsonwebtoken")
const isAuthenticated = require("./middleware/isAuthenticated")

connectToDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.token = req.cookies.token;
    next();
});

app.set('view engine', 'ejs')

app.get("/", async (req, res) => {
    const blogs = await Blog.find()
    res.render("./blog/home", { blogs })
})

app.post("/", async(req,res)=>
    {
    const {search}=req.body
    const data=await Blog.find({title : search})
        res.render("./blog/home", {blogs : data})
})

app.get("/about", isAuthenticated, (req, res) => {
    const name = "Guru Prakash Gupta"
    res.render("./blog/about", { name })
})

app.get("/contact", isAuthenticated, (req, res) => {
    const data = "Please Feel free to contact us"
    res.render("./blog/contact", { data, sent: false})
})
app.get("/logout",(req,res)=>
{
    res.clearCookie("token");
res.redirect("/")
})
app.get("/createblog", isAuthenticated, (req, res) => {
    console.log(req.userId)
    res.render("./blog/createblog")
})
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find(); // Fetch all blogs from the database
        res.render('blog/blog', { blogs }); // Render the blog.ejs template with the blogs data
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.post("/submitform", async (req, res) => {
    const { name, email, message } = req.body
    console.log(name, email, message)
    const data = "Please do contact"
    await Form.create({ name, email, message })
    res.render("./blog/contact.ejs", {data, sent : true})    
})

app.post("/createblog", upload.single('image'), async (req, res) => {
    const fileName = req.file.filename
    const { title, subtitle, description } = req.body
    console.log(title, subtitle, description)

    await Blog.create({ title, subtitle, description, image: fileName })
    res.redirect("/")
})

app.get("/blog/:id", async (req, res) => {
    const id = req.params.id
    const data = await Blog.findById(id)
    res.render("./blog/singleblog", { data })
})

app.get("/deletedata/:id",isAuthenticated, async (req, res) => {
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.redirect("/")
})

app.get("/editdata/:id",isAuthenticated, async (req, res) => {
    const id = req.params.id
    const data = await Blog.findById(id)
    res.render("./blog/edit", { data })
})

app.post('/editdata/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { title, subtitle, description } = req.body;
    const updateData = { title, subtitle, description };

    if (req.file) {
        const fileName = req.file.filename;
        updateData.image = fileName;
    }

    try {
        await Blog.findByIdAndUpdate(id, updateData);
        res.redirect(`/blog/${id}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/register", (req, res) => {
    res.render("./authentication/register")
})

app.get("/login", (req, res) => {
    res.render("./authentication/login")
})

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    await User.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 12)
    })
    res.redirect("/login")
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await User.find({ email: email })

    if (user.length === 0) {
        res.send("Invalid email")
    } else {
        const isMatched = bcrypt.compareSync(password, user[0].password)
        if (!isMatched) {
            res.send("Invalid password")
        } else {
            const token = jwt.sign({ userId: user[0]._id }, process.env.SECRET, {
                expiresIn: '20d'
            })
            res.cookie("token", token)
            res.redirect("/")
        }
    }
})

app.use(express.static("./storage"))
app.use(express.static("./public"))

app.listen(3012, () => {
    console.log("Nodejs project has started at port " + 3012)
})
