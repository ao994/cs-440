import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

// This will help us connect to the database
import "../db/connection.js";
//import defined objects
import {User, Task} from "../db/objects.js";

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


router.get("/tasks", (req, res) => {
  Task.find(req.body.username).then(function(results){res.send(results).status(200);});
})

router.get("/tasks/user", (req, res) => {
  User.findOne(req.body.username).then(function(result){res.send(result).status(200);});
})



router.post("/tasks", (req, res) => {
  console.log(req.body);
  Task.create(req.body)
  .then(task => res.json(task))
  .catch(err => res.json(err))
})


export default router;