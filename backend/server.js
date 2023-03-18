const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var ObjectId = require("mongodb").ObjectId;
const app = express();
app.use(express());
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://premy:premy@cluster0.kwshgmg.mongodb.net/ticket_generator")

.then(()=>{
  console.log("MongoDb is Connected...");
})
.catch(()=>{
  console.log("Error...");
});

app.post("/insert",(req,res)=>{
  const data = req.body.data;

  let connect = mongoose.connection;
  connect.collection("ticket_generator").insertOne(data,(err)=>{
    if(err){
      console.log("Error");
    } else{
      console.log("Inserted Successfully");
      res.status(200).send("Success");
    }
  });
});

app.listen(4000,()=>{
  console.log("Server is connected at port 4000...");
})

//************get data */

app.get("/",(req,res)=>{
  conn
  .collection("ticket_generator")
  .find({})
  .toArray((err,result)=>{
    if(err) res.status(400).send("error fetching data");
    res.json(result);
  });
});

