import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Middleware to verify JWT tokens
const verifyToken = async (req, res) => {

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
            res.status(403).send({message: "Unauthorized!"});
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

  export default verifyToken
  