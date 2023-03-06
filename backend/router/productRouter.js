import express from 'express';
import {createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct} from '../controllers/admin/productController.js';

const productRouter = express.Router();

productRouter.post('/' , createProduct);
productRouter.get('/:id' , getProductDetails);
productRouter.get('/' , getAllProducts);
productRouter.put('/:id/update' , updateProduct)
productRouter.delete('/:id' , deleteProduct)

export default productRouter;