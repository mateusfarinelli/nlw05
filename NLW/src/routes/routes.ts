import { Router } from 'express';
import {routes as settingsRoute} from '../routes/SettingsRoute';
import {routes as usersRoute} from '../routes/UsersRoute';
import {routes as messagesRoute} from '../routes/MessagesRoute';



const routes = Router();

routes.use(settingsRoute);
routes.use(usersRoute);
routes.use(messagesRoute);

routes.get("/", (req, res) => {
  return res.json({
    Hello: "World!"
  });
});



export { routes };