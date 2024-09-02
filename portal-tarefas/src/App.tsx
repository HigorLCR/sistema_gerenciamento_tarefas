import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './view/structure/Header.tsx';
import Login from './view/content/Login.tsx';
import Home from './view/content/Home.tsx';
import TaskEditor from './view/content/TaskEditor.tsx';
import "react-datepicker/dist/react-datepicker.css";

//criar constante router com informações de roteamento para cada pagina
function App() {
    const location = useLocation();

    return (
        <div>
            { location.pathname === '/' ? null : <Header/>}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/tarefa/formulario" element={<TaskEditor/>} />
            </Routes>
        </div>
    );
}

export default App;