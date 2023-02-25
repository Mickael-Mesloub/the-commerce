import '../assets/styles/logPages.scss';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../store/slices/user/userSlice.js';
import Header from '../components/Header.js'
import Auth from '../components/Auth.js';


const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setisLogged] = useState(null);
    
    const state = useSelector(state => state);
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        
        event.preventDefault();
        Auth(event, 'http://localhost:9812/login', setisLogged )
        dispatch(addUser({...state, email: email, password: password}));
        console.log(state)
    }
    
    return(
    
        <>
            
            <Header />
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit} method="post" className="register-form">
                <div className="register-form-inputs">
                    <label htmlFor="email">Email : </label>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="email" />
                </div>
                <div className="register-form-inputs">
                    <label htmlFor="password">Mot de passe : </label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" />
                </div>
                <input type="submit" name="submit" className="register-btn" value="Me connecter" />
            </form>
            {isLogged && 
                <span className="register-msg">Vous êtes connecté(e) !</span>}
                {isLogged === false && 
                <span className="register-msg error">Email ou mot de passe incorrect.</span>
            }
        
        </>
    
    );
    
};

export default Login;