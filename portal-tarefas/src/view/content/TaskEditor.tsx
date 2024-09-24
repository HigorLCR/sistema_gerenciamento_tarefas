import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask, AppDispatch } from '../../store/index.ts';
import DatePicker from "react-datepicker";
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormLabel,
    CFormInput,
    CFormTextarea,
    CFormCheck,
    CAlert,
} from '@coreui/react';
import Button from '../components/Button.tsx';

function TaskEditor() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [titulo, setTitulo] = useState(location.state ? location.state.titulo : '');
    const [isStatusPendente, setIsStatusPendente] = useState(location.state ? location.state.status === 'pendente' : true);
    const [descricao, setDescricao] = useState(location.state ? location.state.descricao : '');
    const [dataCriacao, setDataCriacao] = useState(location.state ? new Date(location.state.dataCriacao) : new Date());

    const { create } = useSelector((state: any) => {
        return state.taskReducer;
    });
    const user = useSelector((state: any) => {
        return state.userReducer;
    })

    useEffect(() => {
        if (user && user.auth && !user.auth.token) {
            navigate('/');
        }
    }, [user]);


    const onSubmitTask = () => {
        const dados = {
            id: location.state ? location.state.id : undefined,
            titulo: titulo,
            descricao: descricao,
            status: isStatusPendente ? 'pendente' : 'concluída',
            dataCriacao: dataCriacao.toISOString()
        };

        if (location.state) {
            dispatch(updateTask(dados));
        } else {
            dispatch(createTask(dados));

            setTitulo('');
            setIsStatusPendente(true);
            setDescricao('');
            setDataCriacao(new Date());
        }
    }

    return (
        <CContainer>
            <CRow className='mt-5 pt-5'>
                <CCol md={11}>
                    <h3>{ location.state ? `Editando Tarefa '${location.state.id}'` : 'Criando Nova Tarefa'}</h3>
                </CCol>
                <CCol md={1}>
                    <Button
                        color='secondary' 
                        label='Voltar'
                        onClick={() => navigate('/home')}
                    />
                </CCol>
            </CRow>
            <CRow className='align-self-center'>
                <CCol>
                    <CForm onSubmit={() => onSubmitTask()}>
                        <CRow className='mt-3'>
                            <CCol>
                                <CFormInput
                                    label='Título'
                                    value={titulo}
                                    placeholder='Insira o título'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitulo(e.target.value)}
                                />
                            </CCol>
                        </CRow>
                        <CRow className='mt-3'>
                            <CCol>
                                <CFormLabel>Status</CFormLabel>
                                <CFormCheck
                                    type="radio"
                                    checked={isStatusPendente}
                                    onChange={() => setIsStatusPendente(!isStatusPendente)}
                                    label='Pendente'
                                />
                                <CFormCheck
                                    type="radio"
                                    checked={!isStatusPendente}
                                    onChange={() => setIsStatusPendente(!isStatusPendente)}
                                    label='Concluído' />
                            </CCol>
                        </CRow>
                        <CRow className='mt-3'>
                            <CCol>
                                <CFormTextarea
                                    label='Descrição'
                                    value={descricao}
                                    placeholder='Insira a descrição da tarefa'
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescricao(e.target.value)}
                                />
                            </CCol>
                        </CRow>
                        <CRow className='mt-3'>
                            <CCol>
                                <CFormLabel>Data de Criação</CFormLabel>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol>
                                <DatePicker selected={dataCriacao} onChange={(item: any) => setDataCriacao(item)} />
                            </CCol>
                        </CRow>
                        <CRow className='mt-3'>
                            <CCol>
                                <Button
                                    color='primary'
                                    label='Enviar'
                                    type='submit'
                                    style={{ width: '5rem' }}
                                    onClick={onSubmitTask}
                                    isLoading={create.isLoading}
                                    spinnerColor='light'
                                />
                            </CCol>
                            {
                                create.error ? 
                                    (<CAlert className='mt-2' dismissible color='danger'>`Erro: ${create.error}` </CAlert>)
                                    : (create.success ? (<CAlert className='mt-2' dismissible color='success'>Tarefa criada com sucesso! </CAlert>): '')
                            }
                        </CRow>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default TaskEditor;