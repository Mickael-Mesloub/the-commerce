import { Link } from "react-router-dom";
import '../assets/styles/header.scss'

const Header = () => {
    
    return(

        <header>
            <div className="login-register-div">
                <ul className="login-register-ul">
                    <li><Link to="/login" className="login-register-links">Connexion</Link></li>
                    <li><Link to="/register" className="login-register-links">Inscription</Link></li>
                </ul>
            </div>
            <h1>Bienvenue sur Thé Commerce !</h1>
            <nav>
                <ul>
                    <li><Link to="/" className="nav-link">Accueil</Link></li>
                </ul>
            </nav>
        </header>
        
    )
    
}

export default Header;