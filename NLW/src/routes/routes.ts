import { Router } from 'express';

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({
    Hello: "World!"
  });
});

routes.post("/usuarios", (req, res) => {
  return res.json({
    message: "Usuário salvo com sucesso!"
  });
});

export default routes;