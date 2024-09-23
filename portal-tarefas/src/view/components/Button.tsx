import React from 'react';
import { CButton, CSpinner } from '@coreui/react';

type ButtonProps = { 
    color: string;
    label: string;
    type?: "button" | "submit" | "reset";
    style?: object | undefined;
    spinnerColor?: string;
    isLoading?: boolean;
    onClick?: () => void;
}

function Button({color, label, type, style, isLoading, spinnerColor, onClick}: ButtonProps) {
    return (
        <CButton 
            style={style} 
            color={color} 
            type={type} 
            onClick={onClick}
        >
            { 
                isLoading ? 
                    <CSpinner size='sm' color={spinnerColor}/> 
                    : label 
            }
        </CButton>
    );
}

export default Button;