import { Router } from 'express';
import {routes as settingsRoute} from '../routes/SettingsRoute'

const routes = Router();

routes.use(settingsRoute)

routes.get("/", (req, res) => {
  return res.json({
    Hello: "World!"
  });
});



export { routes };