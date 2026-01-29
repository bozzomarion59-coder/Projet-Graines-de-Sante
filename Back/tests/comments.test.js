import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../app.js";
import bdd from "../config/bdd.js";

let connection;
let insertedCommentId;
let testUserId;
let testRecipeId;

describe("GET /api/comments/CommentsByRecipe/:id", () => {

  beforeAll(async () => {
    connection = await bdd.getConnection();
    console.log("Connexion BDD ouverte pour les tests");

    // ARRANGE : créer un utilisateur test
    const [userResult] = await connection.query(
      `INSERT INTO users (email_user, password_hash, pseudo_user, role_user)
       VALUES (?, ?, ?, ?)`,
      [
        `commenttest_${Date.now()}@test.fr`,
        "hashedpassword",
        "TestUser",
        "user"
      ]
    );
    testUserId = userResult.insertId;

    // ARRANGE : créer une recette test
    const [recipeResult] = await connection.query(
      `INSERT INTO recipes 
       (categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        1,
        `Recette test commentaire ${Date.now()}`,
        "Description test",
        "Instructions test",
        "image.png",
        10,
        null
      ]
    );
    testRecipeId = recipeResult.insertId;

    // ARRANGE : créer un commentaire test
    const [commentResult] = await connection.query(
      `INSERT INTO comments (user_id, recipe_id, content)
       VALUES (?, ?, ?)`,
      [testUserId, testRecipeId, "Super recette !"]
    );
    insertedCommentId = commentResult.insertId;
  });

  it("devrait retourner les commentaires d’une recette existante", async () => {
    const response = await request(app)
      .get(`/api/comments/CommentsByRecipe/${testRecipeId}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("content");
  });

  afterAll(async () => {
    // Nettoyage : supprimer le commentaire
    await connection.query(
      `DELETE FROM comments WHERE id_comment = ?`,
      [insertedCommentId]
    );

    // Nettoyage : supprimer la recette
    await connection.query(
      `DELETE FROM recipes WHERE id_recipe = ?`,
      [testRecipeId]
    );

    // Nettoyage : supprimer l’utilisateur
    await connection.query(
      `DELETE FROM users WHERE id_user = ?`,
      [testUserId]
    );

    connection.release();
    console.log("Commentaire, recette et utilisateur test supprimés et connexion fermée");
  });
});
