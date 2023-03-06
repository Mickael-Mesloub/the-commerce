import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const Admin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state);
    const [isAdmin, setIsAdmin] = useState(null);


    useEffect(() => {
        if(!user.isAdmin) {
            navigate('/')
            console.log("Ça dégage !");
        }
    },[])

    


    return (
        <>
            <h1>Page Admin</h1>
        
        
        
        </>
        

    )


}

export default Admin;