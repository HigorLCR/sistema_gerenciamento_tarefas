import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CNavItem,
    CNavLink,
    CButton
} from '@coreui/react';

function Header() {

    const navigate = useNavigate();

    const onClickHome = () => {
    };

    const onClickNovaTarefa = () => {
        
    };

    return (
        <CHeader>
            <CContainer fluid>
                <CHeaderBrand>Gerenciador de Tarefas</CHeaderBrand>
                <CHeaderNav>
                    <CNavItem>
                        <CNavLink style={{ cursor:'pointer' }} color='primary' onClick={() => navigate('/')} >Home</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CButton color='success' onClick={() => navigate('/tarefa/formulario')} >Nova Tarefa</CButton>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    );
}

export default Header;