import { Link } from "react-router-dom";
import '../assets/styles/header.scss'

const Header = () => {
    
    return(

        <header>
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