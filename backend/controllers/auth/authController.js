import userModel from '../../models/userModel.js';
import jwt from 'jsonwebtoken';

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

export const login = (req, res) => {
    
    const { email, password } = req.body;
    userModel.findOne({ email }, (err, user) => {
        
        if (err) return res.status(500).json({ message: 'Erreur serveur' });
        if (!user) {
            console.log('Email ou mot de passe incorrect')
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.'});
        }

        user.comparePassword(password, (err, isMatch) => {
            
            if (err) return res.status(500).json({ message: 'Erreur serveur' });
            if (isMatch) {
                const token = user.createJWT();
                return res.status(200).json({message: "Bienvenue !", user, token});
            } else {
                return res.status(400).json({message: 'Email ou mot de passe incorrect.'})
            }
        });
    });
};

export const verifyToken = async (req, res) => {

    // Récupérer un token
    const headers = req.headers.authorization;

    // Si undefined -> error
    if(!headers) {
        return res.status(400).json({message: "No token provided"})
    }

    const token = headers.split(' ')[1]
    console.log(token);
    
    // Analyser le token
    jwt.verify(token, "key_secret", async (err, decoded) => {
        // Si token invalide: renvoie une erreur
        if (err) {
            console.log(err);
            res.status(403).send({message: "Token invalide."});
            return
        }

        // Si token valide: renvoie les infos du user
        const user = await userModel.findOne({_id: decoded.id})
        res.status(200).json({
            user: {
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin
            }
        })
    });
}