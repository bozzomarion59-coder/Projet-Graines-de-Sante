import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import bdd from '../config/bdd.js';

describe('GET /api/recipes/Recipe/:id', () => {
  let connection;
  let insertedId;

  beforeAll(async () => {
    connection = await bdd.getConnection();
    console.log('Connexion BDD ouverte pour les tests');

    // ARRANGE : insertion d’une recette conforme à TA table
    const [insertResult] = await connection.query(
      `INSERT INTO recipes 
      (categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        1,                                // categorie_id
        'Recette test',                   // title_recipe
        'Une description test',           // description
        'Étapes de test',                 // instructions
        'image_test.png',                 // image_png
        20,                               // preparation_time
        10                                // cooking_time
      ]
    );

    insertedId = insertResult.insertId;
  });

  it('devrait retourner une recette existante par son ID', async () => {
    // ACT
    const response = await request(app).get(`/api/recipes/Recipe/${insertedId}`);

    // ASSERT
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.id_recipe).toBe(insertedId);
    expect(response.body.title_recipe).toBe('Recette test');
    expect(response.body.description).toBe('Une description test');
  });

  afterAll(async () => {
    // Nettoyage : suppression de la recette test
    await connection.query(`DELETE FROM recipes WHERE id_recipe = ?`, [insertedId]);
    await connection.release();
    console.log('Recette test supprimée et connexion fermée');
  });
});
