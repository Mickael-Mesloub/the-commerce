import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {logoutUser} from '../store/slices/user/userSlice.js';
import Header from '../components/Header.js';
import LogNav from '../components/LogNav.js';

const Home = () => {
    
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();

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
                </>
            }
        </>
    );
};

export default Home;