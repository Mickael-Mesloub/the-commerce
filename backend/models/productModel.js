import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date().toLocaleString('fr-FR')
    },
    updatedAt: {
        type: String,
        default: new Date().toLocaleString('fr-FR')
    }
});

export default mongoose.model('Product', productModel);
