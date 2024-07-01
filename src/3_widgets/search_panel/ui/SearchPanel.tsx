import React from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import cls from './SearchPanel.module.scss';
import {Input} from "6_shared/ui/Input/Input";
import {Button} from "6_shared/ui/Button/Button";

interface SearchPanelProps {
    className?: string;
}

export const SearchPanel = (props: SearchPanelProps) => {
    const {className} = props;

    return (
        <div
            className={classNames(cls.wrapperSearchPanel, {}, [className])}
        >
            <h2 className={cls.title}>Search Films</h2>
            <div className={cls.asideSearchPanel}>
                <Input type={'text'} className={cls.inputSearch}/>
            </div>
            <Button className={cls.buttonSearch}>
                Search
            </Button>
        </div>
    );
};

