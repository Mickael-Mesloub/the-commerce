import express from 'express';
import {createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct} from '../controllers/admin/productController.js';

const productRouter = express.Router();

productRouter.post('/' , createProduct);
productRouter.get('/product/:id' , getProductDetails);
productRouter.get('/' , getAllProducts);
productRouter.put('/product/:id/update' , updateProduct)
productRouter.delete('/product/:id/delete' , deleteProduct)

export default productRouter;