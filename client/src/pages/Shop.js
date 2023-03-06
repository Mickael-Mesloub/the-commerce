import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/shop.scss';
import Header from '../components/Header.js';
import LogNav from '../components/LogNav.js';
import { Link } from "react-router-dom";
import { loginUser, logoutUser } from "../store/slices/user/userSlice.js";

const Shop = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const {user} = useSelector(state => state);

    useEffect(() => {
        fetch('http://localhost:9812/products') 
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
    }, [])

    console.log(products);
    
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
                    <h1>Boutique</h1>
                    <div className="products-shop">
                        {products.map((el) => ( 
                            <div className="product-container" key={el._id}>
                                <p>{el.name}</p>
                                <p>{el.description}</p>
                                <p>{el.images.map((image, i) =>  <img key={i} src={`http://localhost:9812/public/${image}`} alt={el.name} />)}</p>

                                <p>{el.name}</p>
                                <p>{el.name}</p>
                            </div>
                        ))}
                    </div>
                </>
            :
                <>
                    <LogNav />
                    <Header />
                    
                    <h1>Boutique</h1>
                    <div className="products-shop">
                        {products.map((el) => ( 
                            <div className="product-container" key={el._id}>
                                {Object.entries(el).map(([key, value]) => (
                                    <p key={key}>{key}: {value}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}

    

export default Shop;