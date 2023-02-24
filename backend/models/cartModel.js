import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: "Product"
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Cart', cartModel);