import productModel from "../../models/productModel.js";
import formidable from "formidable";
import fs from 'fs';



// Fonctions asynchrones: accèdent à la DB donc meilleure gestion des erreurs et exceptions car la requête peut prendre du temps 

export const createProduct = async (req, res) => {

    try {

        const form = formidable({ multiples: true });
        form.parse(req, async (err, fields, files) => {

            if (err) {

                return res.status(500).json({ message: "Une erreur s'est produite" })
            }

            const product = await productModel.findOne({ _id: fields.id });
            const oldpath = files.file.filepath;
            const newFilename = `${Date.now()}-${files.file.originalFilename}`
            const newpath = 'img/' + newFilename;
            console.log(newpath);

            fs.copyFile(oldpath, './public/' + newpath, (err) => {
                if (err) {
                    return res.status(500).json({ message: "Une erreur s'est produite" })
                }
                productModel.create({
                    name: fields.name,
                    description: fields.description,
                    images: newpath,
                    quantity: fields.quantity,
                    price: fields.price
                })
                    .then((product) => {
                        console.log(product);
                        res.status(200).json({ message: "Produit créé avec succès!", product })
                    })
                    .catch((err) => res.status(500).json({ message: err }))
            })
        })

    } catch (err) {

        res.status(500).json({ message: "Erreur lors de la création du produit." })
    }
}


export const getAllProducts = async (req, res) => {

    try {

        const products = await productModel.find({})
        res.status(200).json(products)

    } catch (err) {
        res.status(400).json({ message: err })
    }
}

export const getProductDetails = async (req, res) => {

    try {

        const product = await productModel.findOne({ _id: req.params.id })
        res.status(200).json(product)

    } catch (err) {
        res.status(400).json({ message: "Produit introuvable" })
    }
}

export const updateProduct = async (req, res) => {

    try {

        const product = await productModel.findOne({ _id: req.params.id });
        console.log("là");
        console.log(product);

        if (!product) {
            console.log("pas ok");
        }

        const form = formidable({ multiples: true });
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({ message: "Une erreur s'est produite" });
            }

            // If the user uploaded a new image file, update the image path
            let imagePath = product.images;
            if (files.file) {
                const oldpath = files.file.filepath;
                const newFilename = `${Date.now()}-${files.file.originalFilename}`;
                const newpath = "img/" + newFilename;
                await fs.promises.copyFile(
                    oldpath,
                    "./public/" + newpath
                );
                imagePath = newpath;
            }

            // Update the product with the new values
            const updatedProduct = await productModel.findByIdAndUpdate(
                req.params.id,
                {
                    name: fields.name || product.name,
                    description: fields.description || product.description,
                    images: imagePath,
                    quantity: fields.quantity || product.quantity,
                    price: fields.price || product.price,
                },
                { new: true } // Return the updated document
            );

            res.status(200).json({
                message: `Le produit ${updatedProduct.name} a été modifié avec succès!`,
                product: updatedProduct,
            });
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Erreur lors de la modification du produit." });
    }
        };

export const deleteProduct = (req, res) => {

        try {
            console.log(req.params.id);
            productModel.findOneAndDelete({ _id: req.params.id }, (deletedProduct, err) => {
                // if(!deletedProduct) {
                //     return res.status(500).json({message:"Produit introuvable."});
                // }
                console.log(deletedProduct);
                if (deletedProduct) {
                    deletedProduct.images.forEach((image) => {
                        fs.unlink(image)
                    })
                }
            })

            return res.status(204).json({ message: `Le produit a été supprimé avec succès!` })

        } catch (err) {
            res.status(500).json({ message: err })
        }
    }