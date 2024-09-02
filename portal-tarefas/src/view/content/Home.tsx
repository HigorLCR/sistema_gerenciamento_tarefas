import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, AppDispatch } from '../../store/index.ts';
import { 
    CContainer, 
    CCol, 
    CRow,
    CButton,
    CButtonGroup,
} from '@coreui/react';
import SimpleTable from '../components/SimpleTable.tsx';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks } = useSelector((state: any) => {
        return state.taskReducer;
    })
    const taskLabels = tasks.data.length > 0 
        ? Object.keys(tasks.data[0])
        : [];

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);


    return (
        <CContainer>
            <CRow>
                <CCol className='text-center align-self-center mt-5 pt-5' >
                    <h1>Bem-Vindo ao Gerenciador de tarefas!</h1>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <CButton color='success'>Nova Tarefa</CButton>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    {
                        tasks.isLoading || tasks.error 
                            ? ( tasks.isLoading ? 'Carregando...' : 'Houve algum erro coletando dados. Por favor, contate um administrador') 
                            : (<SimpleTable labels={taskLabels} content={tasks.data}/>)                      
                    }
                    
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Home;