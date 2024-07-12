const mongoose=require("mongoose")

async function connectToDb(){
await mongoose.connect("mongodb+srv://gurugupta22:guru1127@cluster0.0bkbuqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
console.log("database connected")
}
module.exports = connectToDb
