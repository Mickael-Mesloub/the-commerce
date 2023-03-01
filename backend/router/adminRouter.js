import express from 'express';
import {getProduct} from '../controllers/adminController.js';
import cors from 'cors';

const adminRouter = express.Router();
adminRouter.use(cors({
    origin: ['http://localhost:3000/admin']
}));

adminRouter.get('/' , getProduct);

export default adminRouter;