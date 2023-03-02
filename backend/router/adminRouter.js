import express from 'express';
import {createProduct, getAllProducts, updateProduct} from '../controllers/adminController.js';
import cors from 'cors';

const adminRouter = express.Router();
adminRouter.use(cors({
    origin: ['http://localhost:3000/admin']
}));

adminRouter.post('/' , createProduct);
// adminRouter.get('/products/product/:id', getProduct);
adminRouter.get('/products', getAllProducts);
adminRouter.put('/', updateProduct)

export default adminRouter;