import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchTasks, deleteTask, AppDispatch } from '../../store/index.ts';
import {
    CContainer,
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import SimpleTable from '../components/SimpleTable.tsx';
import Button from '../components/Button.tsx';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { tasks } = useSelector((state: any) => {
        return state.taskReducer;
    })
    const user = useSelector((state: any) => {
        return state.userReducer;
    })

    const taskLabels = tasks.data.length > 0
        ? Object.keys(tasks.data[0])
        : [];

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);
    useEffect(() => {
        if (user && user.auth && !user.auth.token) {
            navigate('/');
        }
    }, [user]);

    const onExcluir = (id: string) => {
        dispatch(deleteTask(id));
        setTimeout(() => {
            dispatch(fetchTasks());
        }, 400);
    }

    const onEditar = (dados: {
        id: string,
        titulo: string,
        descricao: string,
        status: string,
        dataCriacao: string,
    }) => {
        navigate('/tarefa/formulario', { state: dados });
    }


    return (
        <CContainer>
            <CRow>
                <CCol className='text-center align-self-center mt-5 pt-5' >
                    <h1>Bem-Vindo ao Gerenciador de tarefas!</h1>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <Button 
                        color='success'
                        label='Nova Tarefa'
                        onClick={() => navigate('/tarefa/formulario')}
                    />
                </CCol>
            </CRow>
            <CRow>
                <CCol className='text-center'>
                    {
                        tasks.isLoading || tasks.error
                            ? (tasks.isLoading ? 'Carregando...' : 'Houve algum erro coletando dados. Por favor, contate um administrador')
                            : (
                                <SimpleTable
                                    labels={taskLabels}
                                    content={tasks.data}
                                    onEditar={onEditar}
                                    onExcluir={onExcluir}
                                />
                            )
                    }
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Home;