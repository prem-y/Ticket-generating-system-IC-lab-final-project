const express = require("express");
const db = require("mongoose");
var cors = require("cors");
var ObjectId = require("mongodb").ObjectId;
const app = express();
app.use(express.json());
db.set("strictQuery", false);
app.use(cors());

//************mongodb connect */
db.connect("mongodb+srv://premy:premy@cluster0.kwshgmg.mongodb.net/TGS", {
  useNewURLParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));

var conn = db.connection;
app.listen(4000, () => {
  console.log("server running at 4000");
});

//**************insert data to database */

app.post("/insert", function (req, res) {
  const fdata = req.body.fdata;
  conn.collection("ticket").insertOne(fdata, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("inserted");
      res.status(202).send("success");
    }
  });
});

//***************get data from database  */

app.get("/", async (req, res) => {
  let response = await conn.collection("ticket").find({}).toArray();
  res.json(response);
});

// *********** delete data ***********
app.post("/delete", async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const result = await conn.collection("ticket").delete({ _id: ObjectId(id) });
    if (result.deletedCount === 0) {
      res.status(404).send("No ticket found");
    } else {
      console.log("Deleted");
      res.status(204).send("Success");
    }
  } catch (error) {
    res.status(500).send("Error deleting ticket");
  }
});

// get data for updated
app.post("/get", (req, res) => {
  let id = req.body.id;
  console.log(id);
  conn
    .collection("ticket")
    .find({ _id: ObjectId(id) })
    .toArray((err, result) => {
      if (err) res.status(400).send("error fetching data");
      res.json(result);
      console.log(result);
    });
  });
  
  //******update data *********************/
  app.post("/update", (req, res) => {
    console.log(req.body);
    let id = req.body._id;
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;
    console.log(id);
    console.log(title);
    console.log(content);
    console.log(author);
    conn
    .collection("ticket")
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { title: title, content: content, author: author } }
    )
    .then((err) => {
      if (err) {
        console.log("record not updateed");
        console.log(err);
      } else {
        console.log("updated");
        res.status(204).send("success");
      }
    });
  });
  