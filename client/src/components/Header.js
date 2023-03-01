import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/header.scss';

const Header = () => {
    
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(

        <header>
            <h1>Bienvenue sur Thé Commerce !</h1>
            <nav>
                <ul>
                <li><Link to="/" className="nav-link">Accueil</Link></li>
                {state.user.logged && 
                    <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                }
                </ul>
            </nav>
        </header>
        
    )
    
}

export default Header;