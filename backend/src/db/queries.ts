import pool from './connection';
import { User } from './types';

export const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
  return result.rows;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const createUser = async (
  name: string,
  email: string,
  role: string = 'user'
): Promise<User> => {
  const result = await pool.query(
    'INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *',
    [name, email, role]
  );
  return result.rows[0];
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
  return (result.rowCount || 0) > 0;
};
