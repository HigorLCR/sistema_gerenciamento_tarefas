import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './view/structure/Header.tsx';
import Home from './view/content/Home.tsx';
import CreateTask from './view/content/CreateTask.tsx';

//criar constante router com informações de roteamento para cada pagina
function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/novatarefa" element={<CreateTask/>} />
            </Routes>
        </div>
    );
}

export default App;