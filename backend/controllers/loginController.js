import userModel from '../models/userModel.js';

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