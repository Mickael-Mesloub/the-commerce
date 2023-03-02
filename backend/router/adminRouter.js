import express from 'express';
import {createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct} from '../controllers/adminController.js';
import cors from 'cors';

const adminRouter = express.Router();
adminRouter.use(cors({
    origin: ['http://localhost:3000/admin']
}));

adminRouter.post('/' , createProduct);
adminRouter.get('/products/product/:id', getProductDetails);
adminRouter.get('/products', getAllProducts);
adminRouter.put('/products/product/:id/update', updateProduct)
adminRouter.delete('/products/product/:id/delete', deleteProduct)

export default adminRouter;