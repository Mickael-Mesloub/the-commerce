import userModel from '../models/userModel.js';

export const register = (req, res) => {

    const {email, password, isAdmin} = req.body;

        userModel.create({
            email,
            password,
            isAdmin
        })
        .then((user) => {
            
            const token = user.createJWT();
            console.log(`Nouvel utilisateur: ${user} et son TOKEN: ${token}`);
            res.status(201).json({message: "Votre compte a bien été créé!", user, token});

        })
        .catch((error) => {
            res.status(400).json({message: "ERROR"});
        });
     
};