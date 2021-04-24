import express, { response } from 'express';
import { routes } from './routes/routes';
import './database'

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});