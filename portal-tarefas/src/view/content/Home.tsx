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

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { tasks } = useSelector((state: any) => {
        return state.taskReducer;
    })
    const taskLabels = tasks.data.length > 0 
        ? Object.keys(tasks.data[0])
        : [];

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);


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
    })  => {
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
                    <CButton color='success' onClick={() => navigate('/tarefa/formulario')}>Nova Tarefa</CButton>
                </CCol>
            </CRow>
            <CRow>
                <CCol className='text-center'>
                    {
                        tasks.isLoading || tasks.error 
                            ? ( tasks.isLoading ? 'Carregando...' : 'Houve algum erro coletando dados. Por favor, contate um administrador') 
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