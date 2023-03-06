import '../assets/styles/logPages.scss';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser, logoutUser} from '../store/slices/user/userSlice.js';
import { Link } from "react-router-dom"
import Header from '../components/Header.js';
import LogNav from '../components/LogNav.js';
import Auth from '../components/Auth.js';

const Register = () => {

    // ***** STATES *****
    
    const [token, setToken] = useState('');

    // ***** REDUX *****
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();
    
    // ***** USEFFECTS *****


    // ***** FONCTIONS *****
    const handleSubmit = (event) => {
        event.preventDefault();
        Auth(event, 'http://localhost:9812/register', token, setToken, dispatch, loginUser);
    }
    console.log(token);

    return (
    
            <>
            {user.isLogged ?
                <>
                    <div className="login-register-div">
                        <ul className="login-register-ul">
                            <li>
                                <Link 
                                    onClick={() => {
                                        dispatch(logoutUser()); 
                                        localStorage.removeItem('jwt')
                                    }} 
                                    className="login-register-links" >
                                    Déconnexion
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Header />
                </>
                :
                <>  
                    <LogNav />
                    <Header />
                    <h2>Inscrivez-vous</h2>
                    <form onSubmit={handleSubmit} method="post" className="register-form">
                        <div className="register-form-inputs">
                            <label htmlFor="email">Email : </label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="register-form-inputs">
                            <label htmlFor="password">Mot de passe : </label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <input type="submit" name="submit" className="register-btn" value="M'inscrire" />
                    </form>
                    {user.isLogged && 
                        <span className="register-msg">Votre compte a bien été créé !</span>}
                        {user.isLogged === false && 
                        <span className="register-msg error">Cet utilisateur existe déjà. Veuillez entrer une nouvelle adresse email.</span>
                    }
                </>
            }
        </>
    );
}

export default Register;