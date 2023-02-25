import express from 'express';
import {register} from '../controllers/registerController.js';
import cors from 'cors';

const registerRouter = express.Router();
registerRouter.use(cors({
    origin: ['http://localhost:3000/register']
}));

registerRouter.post('/', register);

export default registerRouter;