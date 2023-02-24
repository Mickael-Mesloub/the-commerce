import mongoose from "mongoose";

const productModel = new mongoose.Schema({
        name: {
            type: String,
        },
        description: {
            type: String
        },
        image: {
            type: Array
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number
        },
    }, {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Product', productModel);