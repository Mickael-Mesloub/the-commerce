import '../assets/styles/logPages.scss';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../store/slices/user/userSlice.js';
import Header from '../components/Header.js';
import Auth from '../components/Auth.js';



const Register = () => {

    // ***** STATES *****
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(null);
    
    // ***** USEFFECTS *****


    // ***** REDUX *****
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    

    // ***** FONCTIONS *****
    const handleSubmit = (event) => {
        event.preventDefault();
        Auth(event, 'http://localhost:9812/register', setIsRegistered );
        dispatch(addUser({...state, email: email, password: password}));
        console.log(state)
    }
    
    return(
    
        <>
            <Header />
            <h2>Inscrivez-vous</h2>
            <form onSubmit={handleSubmit} method="post" className="register-form">
                <div className="register-form-inputs">
                    <label htmlFor="email">Email : </label>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="email" />
                </div>
                <div className="register-form-inputs">
                    <label htmlFor="password">Mot de passe : </label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" />
                </div>
                <input type="submit" name="submit" className="register-btn" value="M'inscrire" />
            </form>
            {isRegistered && 
                <span className="register-msg">Votre compte a bien été créé !</span>}
                {isRegistered === false && 
                <span className="register-msg error">Cet utilisateur existe déjà. Veuillez entrer une nouvelle adresse email.</span>
            }
        
        </>
    
    );
    
};

export default Register;