import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './view/structure/Header.tsx';
import Home from './view/content/Home.tsx';
import TaskEditor from './view/content/TaskEditor.tsx';
import "react-datepicker/dist/react-datepicker.css";

//criar constante router com informações de roteamento para cada pagina
function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/tarefa/formulario" element={<TaskEditor/>} />
            </Routes>
        </div>
    );
}

export default App;