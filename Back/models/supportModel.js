import db from "../config/bdd.js";

export const sendMessage = (nom, email, sujet, contenu) => {
  const sql = `
    INSERT INTO support_messages (nom, email, sujet, contenu)
    VALUES (?, ?, ?, ?)
  `;
  return db.query(sql, [nom, email, sujet, contenu]);
};

export const updateStatus = (id, status) => {
  const sql = "UPDATE support_messages SET statut = ? WHERE id_message = ?";
  return db.query(sql, [status, id]);
};

export const getAllMessages = () => {
  const sql = `
    SELECT 
      id_message,
      nom,
      email,
      sujet,
      contenu,
      statut,
      date_envoi
    FROM support_messages
    ORDER BY date_envoi DESC
  `;
  return db.query(sql);
};

