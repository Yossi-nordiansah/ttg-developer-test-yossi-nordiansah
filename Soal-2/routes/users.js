import express from "express"
const router = express.Router();
import { createUser, getUsers, getUserById, deleteUser } from "../controllers/userController.js";

router.post("/create", createUser); 
router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

export default router;