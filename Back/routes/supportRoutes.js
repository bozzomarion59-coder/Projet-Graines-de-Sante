import express from "express";
import * as supportControllers from "../controllers/supportControllers.js";

const router = express.Router();

router.post("/send", supportControllers.sendMessage);
router.get("/AllMessages", supportControllers.getAllMessages);

export default router;
