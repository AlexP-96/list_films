import React, {
    ChangeEvent,
    FormEvent,
    useState,
} from 'react';
import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import { useDispatch } from 'react-redux';
import { requestDataActions } from '../model/slice/requestSlice';
import cls from './SearchPanel.module.scss';
import { Input } from '6_shared/ui/Input/Input';
import { Button } from '6_shared/ui/Button/Button';

interface SearchPanelProps {
    className?: string;
}

export const SearchPanel = (props: SearchPanelProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState<string>('');

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(requestDataActions.searchMovie(valueSearch));
    };

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };

    return (
        <div
            className={classNames(cls.wrapperSearchPanel, {}, [className])}
        >
            <h2 className={cls.title}>Search Films</h2>
            <div className={cls.asideSearchPanel}>
                <Input
                    type={'text'}
                    className={cls.inputSearch}
                    handleChange={handlerChange}
                />
            </div>
            <Button
                className={cls.buttonSearch}
                submit={handleClick}
            >
                Search
            </Button>
        </div>
    );
};

