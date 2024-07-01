import React, {FormEvent} from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export const Button = ({className, children}: ButtonProps) => {
    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return (
        <button
            className={classNames(cls.button, {}, [className])}
            onSubmit={handleClick}
        >
            {children}
        </button>
    );
};

