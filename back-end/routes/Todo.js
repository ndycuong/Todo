import express from 'express';
import { CreateTodo, UpdateTodo,GetTodo , DeleteTodo, GetTodos} from '../Controllers/Todo.js';

const Router = express.Router();
Router.post('/create', CreateTodo)
Router.put('/:id', UpdateTodo)
Router.get('/:id', GetTodo)
Router.get('/', GetTodos) 
Router.delete('/:id', DeleteTodo)

export default Router;
