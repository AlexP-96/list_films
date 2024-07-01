import React, {
    FC,
    FormEvent,
    PropsWithChildren,
} from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends PropsWithChildren {
    className?: string;
    submit?: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps>= ({className, submit, children}) => {

    return (
        <button
            className={classNames(cls.button, {}, [className])}
            onClick={submit}
        >
            {children}
        </button>
    );
};

