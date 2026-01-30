import express from "express";
import * as supportControllers from "../controllers/supportControllers.js";

const router = express.Router();

// Routes pour ajouter message
router.post("/send", supportControllers.sendMessage);

// Routes pour obtenir tous les messages
router.get("/AllMessages", supportControllers.getAllMessages);

export default router;
