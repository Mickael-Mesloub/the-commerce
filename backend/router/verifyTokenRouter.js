import express from 'express';
import verifyToken from '../controllers/verifyTokenController.js';
import cors from 'cors';

const verifyTokenRouter = express.Router();
verifyTokenRouter.use(cors({
    origin: ['http://localhost:3000/verify-token']
}));

verifyTokenRouter.get('/', verifyToken);

export default verifyTokenRouter;