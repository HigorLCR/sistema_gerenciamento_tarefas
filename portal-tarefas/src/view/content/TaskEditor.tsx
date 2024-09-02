import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, AppDispatch } from '../../store/index.ts';
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
    CButtonGroup,
    CButton,
} from '@coreui/react';

function TaskEditor() {
    const [titulo, setTitulo] = useState('');
    const [isStatusPendente, setIsStatusPendente] = useState(true);
    const [descricao, setDescricao] = useState('');
    const [dataCriacao, setDataCriacao] = useState(new Date());

    const dispatch = useDispatch<AppDispatch>();
    const { create } = useSelector((state: any) => {
        return state.taskReducer;
    });

    const onSendForm = () => {
        const dados = {
            titulo: titulo,
            descricao: descricao,
            status: isStatusPendente ? 'pendente' : 'concluída',
            dataCriacao: dataCriacao.toISOString()
        };

        dispatch(createTask(dados));

        setTitulo('');
        setIsStatusPendente(true);
        setDescricao('');
        setDataCriacao(new Date());
    }

    return (
        <CContainer>
            <CRow className='mt-5 pt-5'>
                <CCol>
                    <CButtonGroup>
                        <CButton color='success'>
                            Criar Nova
                        </CButton>
                        <CButton color='info'>
                            Editar
                        </CButton>
                    </CButtonGroup>
                </CCol>
            </CRow>
            <CRow className='align-self-center'>
                <CCol>
                    <CForm>
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
                                <CButton color='primary' onClick={onSendForm}>Enviar</CButton>
                            </CCol>
                            {
                                create.isPending 
                                    ? 'carregando...' 
                                    : ( create.error ? `Erro: ${create.error}` : ( create.success ? 'Sucesso' : '') )
                            }
                        </CRow>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default TaskEditor;