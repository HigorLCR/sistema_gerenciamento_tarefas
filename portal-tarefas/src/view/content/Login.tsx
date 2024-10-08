import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { auth, AppDispatch } from '../../store/index.ts';
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormInput,
    CButton
} from '@coreui/react';

function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const user = useSelector((state: any) => {
        return state.userReducer;
    })

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        if (user && user.auth && user.auth.token) {
            navigate('/home');
        }
    }, [user]);

    const onClickAuth = (login, senha) => {
        dispatch(auth({login, senha}));

    };

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
                                <CButton color='success' onClick={() => {onClickAuth(login, senha)}} >Entrar</CButton>
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