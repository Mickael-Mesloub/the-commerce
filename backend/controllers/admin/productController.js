import productModel from "../../models/productModel.js";
import formidable from "formidable";
import fs from 'fs';



// Fonctions asynchrones: accèdent à la DB donc meilleure gestion des erreurs et exceptions car la requête peut prendre du temps 

export const createProduct = async (req, res) => {

    try {
           
        const form = formidable();
        // const {name, desc, quantity, price} = req.body;
        form.parse(req, (err, fields, files) => {
            let oldpath = files.file.filepath;
            let newpath = './img/' + files.file.originalFilename;
            fs.copyFile(oldpath, './public/' + newpath, function (err){
                if (err) throw err;
                
            })
              
            const newProduct = new productModel({
                name: fields.name,
                description: fields.desc,
                image: newpath,
                quantity: fields.quantity,
                price: fields.price
            })
            if(err) {
                res.status(500).json({message: "Le produit n'a pas pu être créé"})
            } else {
                console.log(newProduct);
                console.log(`Un nouveau produit a été créé et ajouté à la DB: ${newProduct}`);
                newProduct.save()
                    .then(() => res.status(200).json(newProduct))
                    .catch((err) => res.status(500).json({message: err}))
            }       
        })
        
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