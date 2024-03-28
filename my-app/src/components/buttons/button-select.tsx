import React from 'react';
import classes from './button-select.module.css';

type ButtonProps = {
    children: string;
};

const ButtonSelect: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className={classes.buttonSelected }>
            {children}
        </button>
    );
};

export default ButtonSelect;