import productModel from "../models/productModel.js";

export const createProduct = async (req, res) => {

    const {name, desc, quantity, price} = req.body;

    try {
        const newProduct = await productModel.create({
            name: name,
            description: desc,
            // image: image,
            quantity: quantity,
            price: price
        })
            console.log(`Un nouveau produit a été créé et ajouté à la DB: ${newProduct}`);
            res.status(201).json(newProduct)

    } catch(err) {
        console.log(`Attention, erreur: ${err}`)
        res.status(400).json({message: "Erreur lors de la création du produit."})
    }
}

export const getAllProducts = (req, res) => {
    productModel.find({}, (err, products) => {
        res.status(200).json(products)
        if(err) {
            res.status(400).json({message: err})
        }
    })
}   

export const getProduct = (req, res) => {
    const product = productModel.findOne({_id: req.params.id}, err, product => {
        res.status(200).json(product)
        if(err) {
            res.status(400).json({message: "Produit introuvable"})
        }
    })
}



// Récupérer id du product


export const updateProduct = (req, res) => {

    const {name, desc, quantity, price} = req.body;

    productModel.updateOne({_id: ObjectId},{
        name: name,
        description: desc,
        // image: image,
        quantity: quantity,
        price: price
    })
    .then(updatedProduct => {
        console.log(updatedProduct._id);
    })
}

/* 


*/