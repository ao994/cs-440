import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

// This will help us connect to the database
import "../db/connection.js";
//import defined objects
import {User} from "../db/objects.js";

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



export default router;