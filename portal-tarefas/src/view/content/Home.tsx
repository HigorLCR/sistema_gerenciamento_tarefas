import React from 'react';
import { 
    CContainer, 
    CCol, 
    CRow,
    CButton,
    CButtonGroup,
} from '@coreui/react';

function Home() {
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