import express from "express";
import {UserController} from '../controller/UserController';
let userController = new UserController();

const router = express.Router();

router.get("/:email", async(req, res) =>{
    res.send(await userController.getUser(req.params.email));
})

router.post("/", async(req,res) =>{
    try {
        let user = await userController.createUser(req.body.email, req.body.name);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

router.put("/", async (req, res) => {
    try {
        let user = await userController.modifyUserName(req.body.email, req.body.name);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete("/", async(req, res) => {
    try {
        await userController.deleteUser(req.body.email);
        res.status(200).send("User Deleted");
    } catch (error) {
        res.status(500).send("Error deleting user");
    }
})

module.exports = router;