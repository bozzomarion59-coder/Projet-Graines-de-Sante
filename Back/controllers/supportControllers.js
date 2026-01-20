import * as supportModel from "../models/supportModel.js";

export const sendMessage = async (req, res) => {
  const { nom, email, sujet, contenu } = req.body;

  try {
    await supportModel.sendMessage(nom, email, sujet, contenu);
    res.status(201).json({ message: "Message envoyé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await supportModel.getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
