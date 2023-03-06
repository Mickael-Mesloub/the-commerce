import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: "Product"
        }
    }, {
        createdAt: {
            type: String,
            default: new Date().toLocaleString('fr-FR')
        },
        updatedAt: {
            type: String,
            default: new Date().toLocaleString('fr-FR')
        }
    }
);

export default mongoose.model('Cart', cartModel);