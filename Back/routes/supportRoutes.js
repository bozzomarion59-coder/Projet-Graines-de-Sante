import express from "express";
import * as supportControllers from "../controllers/supportControllers.js";

const router = express.Router();

// Routes pour ajouter message
router.post("/send", supportControllers.sendMessage);

// Routes pour obtenir tous les messages
router.get("/AllMessages", supportControllers.getAllMessages);

// Route pour mettre à jour le statut d'un message
router.put("/status/:id", supportControllers.updateStatus);

export default router;
