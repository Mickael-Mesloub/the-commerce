import productModel from "../models/productModel.js";


export const createProduct = async (req, res) => {

    const {name, desc, quantity, price} = req.body;

    // Fonction asynchrone: accède à la DB donc meilleure gestion des erreurs car la requête peut prendre du temps 

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

export const getAllProducts = async (req, res) => {
    try {

        const products = await productModel.find({})
        res.status(200).json(products)

    } catch(err) {
        res.status(400).json({message: err})
    }
}   

export const getProductDetails = async (req, res) => {

    try {

        const product = await productModel.findOne({_id: req.params.id})
        res.status(200).json(product)

    } catch(err){
        res.status(400).json({message: "Produit introuvable"})
    }
    
}

export const updateProduct = async (req, res) => {

    try {

        const product = await productModel.findOne({_id: req.params.id})
        productModel.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        res.status(200).json({message: `Le produit ${product.name} modifié avec succès!`})

    } catch(err) {   
        res.status(400).json({message: err})
    }
}

export const deleteProduct = async (req, res) => {

    try {

        const product = await productModel.findOne({_id: req.params.id})
        await productModel.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({message:`Le produit ${product.name} a été supprimé avec succès!`})

    } catch(err) {
        res.status(400).json({message: err})
    }
}