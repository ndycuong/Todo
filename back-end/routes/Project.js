import express from 'express';
import { CreateProject, UpdateProject,GetProject,DeleteProject ,GetProjects} from '../Controllers/Project.js';

const Router = express.Router();
Router.post('/create', CreateProject)
Router.put('/:id', UpdateProject)
Router.get('/:id', GetProject)
Router.get('/', GetProjects) 
Router.delete('/:id', DeleteProject)

export default Router;