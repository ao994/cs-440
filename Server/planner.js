import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

const uri = process.env.ATLAS_URI || "";

//this will connect to the server
try {
  // Connect the client to the server
  await mongoose.connect(uri);
} catch(err) {
  console.error(err);
}

//define objects
const { Schema } = mongoose;
//user object
const userSchema = new Schema({
  name:String,
  email:String,
  password:String
});
const User = mongoose.model('User', userSchema);

//task object
const taskSchema = new Schema({
  username:String,
  task:String,
  description:String,
  course:String,
  dueDate:Date,
  complete:Boolean
});
const Task = mongoose.model('Task', taskSchema);


// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /planner.
const router = express.Router();

// This sends all user information to the home page.
router.get("/", async (req, res) => {
  User.find().then(function(results){res.send(results).status(200);});
});

router.post("/login", (req, res) => {
  const {email, password} = req.body;
  User.findOne({email : email})
  .then(user => {
      if(user) {
          if(user.password === password){
              res.json("Success")
          }else{
              res.json("The password is incorrect")
          }
      }else{
          res.json("No record existed")
      }
  })
})

router.post("/signup", (req, res) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})


router.get("/tasks/:username", (req, res) => {
  Task.find({username: req.params.username}).then(function(results){
    if (!results) res.send("No users found").status(404);
    else res.send(results).status(200);
  });
})


router.post("/tasks", (req, res) => {
  console.log(req.body);
  Task.create(req.body)
  .then(task => res.json(task))
  .catch(err => res.json(err))
})


export default router;