import '@/config/dotenv';
import express, { Express, Request, Response } from 'express';
import knex from '@/config/knex';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  const results = await knex('users').select();
  res.json(results);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
