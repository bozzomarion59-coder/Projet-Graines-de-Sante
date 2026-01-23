import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import bdd from '../config/bdd.js';

describe('GET /api/users/User/:id', () => {
  let connection;
  let insertedUserId;

  beforeAll(async () => {
    connection = await bdd.getConnection();
    console.log('Connexion BDD ouverte pour les tests');

    // ARRANGE : insertion d’un utilisateur test
    const [insertResult] = await connection.query(
      `INSERT INTO users (email_user, password_hash, pseudo_user, role_user)
       VALUES (?, ?, ?, ?)`,
      [
        'testuser@example.com',   
        'hashedpassword123',      
        'TestUser',               
        'user'                    
      ]
    );

    insertedUserId = insertResult.insertId;
  });

  it('devrait retourner un utilisateur existant par son ID', async () => {
    // ACT
    const response = await request(app).get(`/api/users/User/${insertedUserId}`);

    // ASSERT
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.id_user).toBe(insertedUserId);
    expect(response.body.email_user).toBe('testuser@example.com');
    expect(response.body.pseudo_user).toBe('TestUser');
    expect(response.body.role_user).toBe('user');
  });

  afterAll(async () => {
    // Nettoyage : suppression de l’utilisateur test
    await connection.query(`DELETE FROM users WHERE id_user = ?`, [insertedUserId]);
    await connection.release();
    console.log('Utilisateur test supprimé et connexion fermée');
  });
});
