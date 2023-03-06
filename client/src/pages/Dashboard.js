import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import verifyToken from "../components/VerifyToken.js";
import { loginUser, logoutUser } from "../store/slices/user/userSlice.js";
import { useNavigate } from 'react-router-dom';

/*
Pour avoir accès au dashboard, user doit être logged
    -> verify token

Si pas connecté: logout et rediriger
*/


const Dashboard = () => {

    const {user} = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if(token && !user.logged) {
            verifyToken('http://localhost:9812/verify-token', token, dispatch, loginUser)
            .catch(err => {
                console.log(err)
            })
        }
    }, [])


    useEffect(() => {
        console.log(user);
    },[user])

    return(
        <>
            <h1>Dashboard</h1>
            <p>Bienvenue {user.email}</p>
        
        </>
    )

}

export default Dashboard