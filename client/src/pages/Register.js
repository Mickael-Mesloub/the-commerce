import '../assets/styles/register.scss';
import {useState, useEffect} from 'react';

const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        console.log(`Email: ${email} -- Password: ${password}`)
    }, [email, password])
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return(
    
        <>
            <h1>Inscrivez-vous</h1>
            
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
        
        </>
    
    );
    
};

export default Register;