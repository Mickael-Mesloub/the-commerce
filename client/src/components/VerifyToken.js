import { useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const VerifyToken = () => {
  const [token, setToken] = useState('');

  const handleVerifyToken = async () => {
    try {
      // Send the token to the server to verify it
      const response = await axios.post('http://localhost:9812/verify-token', { token });
      
      // If the token is valid, decode it and do something with the payload
      if (response.data.valid) {
        const decodedToken = jwt.decode(token);
        const userId = decodedToken.userId;
        const userEmail = decodedToken.email;
        // Do something with the user id and email
        
      } else {
        // If the token is invalid, show an error message
        alert('Token invalide');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleVerifyToken}>Vérifier le token</button>
    </div>
  );
}

export default VerifyToken;