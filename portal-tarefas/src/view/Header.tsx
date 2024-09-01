import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CCollapse,
    CNavItem,
    CNavLink,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownDivider,
    CDropdownItem,
    CForm,
    CFormInput,
    CButton
} from '@coreui/react';

function Header() {
    return (
        <CHeader>
            <CContainer fluid>
                <CHeaderBrand>Gerenciador de Tarefas</CHeaderBrand>
                <CHeaderNav>
                    <CNavItem>
                        <CNavLink color='primary' href='#'>Home</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CButton color='success'>Criação</CButton>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    );
}

export default Header;