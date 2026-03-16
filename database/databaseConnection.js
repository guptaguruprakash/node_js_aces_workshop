const mongoose=require("mongoose")

async function connectToDb(){
await mongoose.connect("your_cluster_id"),
console.log("database connected")
}
module.exports = connectToDb
