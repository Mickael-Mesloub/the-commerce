import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const register = async(req, res, next) => {

    const {email, password} = req.body;
    
    userModel.findOne({email: req.body.email} , (err, existingUser) => {
        
        if(err) {
            return next(err);
        }
        
        if(existingUser) {
            
            console.log(`L'adresse e-mail ${req.body.email} existe déjà. Veuillez entrer une autre adresse e-mail valide.`);
            return res.status(400).json({message: `L'adresse e-mail ${req.body.email} existe déjà. Veuillez entrer une autre adresse e-mail valide.`});
        }
        
        else {
            
            userModel.create({
                email,
                password,
            })
            
            .then((user) => {
                
                const token = user.createJWT();
                console.log(`Nouvel utilisateur: ${user} et son TOKEN: ${token}`);
                res.status(200).json({message: "Votre compte a bien été créé!", user, token});

            })
            
            .catch((error) => {
                res.status(400).json({message: "ERROR"});
            });
        }
    });
};