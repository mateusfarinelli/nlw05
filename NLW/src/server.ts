import express, { response } from 'express';
import routes from './routes/routes';

const PORT = 8080;
const app = express();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});