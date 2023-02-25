import express from 'express';
import {login} from '../controllers/loginController.js';
import cors from 'cors';

const loginRouter = express.Router();
loginRouter.use(cors({
    origin: ['http://localhost:3000/login']
}));

loginRouter.post('/' , login);

export default loginRouter;