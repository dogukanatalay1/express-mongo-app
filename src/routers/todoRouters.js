import express from 'express';
import { addTodo, deleteTodo } from '../controllers/todoControllers.js';

const router = express.Router();

router.post('/todo', addTodo);

export default router;
