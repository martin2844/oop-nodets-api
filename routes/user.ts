import express from "express";
import {UserController} from '../controller/UserController';
let userController = new UserController();

const router = express.Router();

router.get("/get/:email", async(req, res) =>{
    res.send(await userController.getUser(req.params.id));
})

router.post("/new", async(req,res) =>{
    console.log(req.body);
    try {
        let user = await userController.createUser(req.body.email, req.body.name);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
  
})

module.exports = router;