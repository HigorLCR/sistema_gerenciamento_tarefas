import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { cleanAuthToken } from '../../store/index.ts';
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHome = () => {
        navigate('/home');
    };

    const onClickSair = () => {
        navigate('/');
        dispatch(cleanAuthToken(null))
    };

    return (
        <CHeader>
            <CContainer fluid>
                <CHeaderBrand>Gerenciador de Tarefas</CHeaderBrand>
                <CHeaderNav>
                    <CNavItem>
                        <CNavLink style={{ cursor:'pointer' }} color='primary' onClick={onClickHome} >Home</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CButton color='danger' onClick={onClickSair} >Sair</CButton>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    );
}

export default Header;