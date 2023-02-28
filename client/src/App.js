import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser, logoutUser} from './store/slices/user/userSlice.js';
import './assets/styles/app.scss';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';


const App = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const user = state.user
    console.log(user)

    useEffect(() => {
        console.log(user);
    },[user])

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if(token && !user.logged) {
            
        }
    },[])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
