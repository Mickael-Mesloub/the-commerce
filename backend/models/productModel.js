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
        image: {
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
    }, {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Product', productModel);