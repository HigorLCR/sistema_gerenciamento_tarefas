import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './view/Header.tsx';
import Home from './view/Home.tsx';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;