import React, { useState } from 'react';
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormInput,
    CButton
} from '@coreui/react';

function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <CContainer>
            <CRow className='text-center mt-5 pt-5 mb-5 pb-5'>
                <CCol>
                    <h2>
                        Gerenciador de Tarefas
                    </h2>
                </CCol>
            </CRow>
            <CRow className='mt-5'>
                <CCol>
                    <CForm>
                        <CRow className='mt-2 d-flex justify-content-center'>
                            <CCol md={5}>
                                <CFormInput
                                    label='Login'
                                    value={login}
                                    placeholder='Insira seu Login'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                                />
                            </CCol>
                        </CRow>
                        <CRow className='mt-2 d-flex justify-content-center'>
                            <CCol md={5}>
                                <CFormInput
                                    type='password'
                                    label='Senha'
                                    value={senha}
                                    placeholder='Insira sua senha'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                                />
                            </CCol>
                        </CRow>
                        <CRow className='mt-4'>
                            <CCol md={5}/>
                            <CCol className='d-flex justify-content-end' style ={{ marginRight: '3.5rem' }}>
                                <CButton color='success'>Entrar</CButton>
                            </CCol>
                            <CCol md={3}/>
                        </CRow>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Login;