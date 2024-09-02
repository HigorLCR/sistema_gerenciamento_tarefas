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

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks } = useSelector((state: any) => {
        return state.taskReducer;
    })
    console.log("TASKS: ", tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    if (tasks.isLoading) {
        return (<div>carregando...</div>);
    }

    if (tasks.error) {
        return (<div>Houve algum erro coletando dados. Por favor, contate um administrador</div>)
    }

    return (
        <CContainer className='d-flex justify-content-center'>
            <CRow>
                <CCol className='mt-5 pt-5' >
                    <h1>Bem-Vindo ao Gerenciador de tarefas!</h1>
                </CCol>
            </CRow>
            <CRow>
                <CCol>

                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Home;