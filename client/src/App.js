import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/styles/app.scss';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';


const App = () => {

    const {user} = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(user)

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if(token && !user.logged) {
            console.log("connected")
        }
    },[])

    useEffect(() => {
        console.log(user);
    },[user])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
