import './assets/styles/app.scss';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
