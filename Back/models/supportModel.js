import db from "../config/bdd.js";

export const sendMessage = (nom, email, sujet, contenu) => {
  const sql = `
    INSERT INTO support_messages (nom, email, sujet, contenu)
    VALUES (?, ?, ?, ?)
  `;
  return db.query(sql, [nom, email, sujet, contenu]);
};

export const getAllMessages = () => {
  const sql = `
    SELECT * FROM support_messages
    ORDER BY date_envoi DESC
  `;
  return db.query(sql);
};
