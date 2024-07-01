import { retry } from '@reduxjs/toolkit/query';
import {
    ChangeEvent,
    FC,
    PropsWithChildren,
    useEffect,
    useState,
} from 'react';

import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import { log } from 'util';
import { reqGenresMovie } from '../../../6_shared/api/types/types';
import { RequestKeyType } from '../model/types/requestSchema';
import cls from './BlockRadioFilter.module.scss';
import { Input } from '6_shared/ui/Input/Input';
import {
    useDispatch,
} from 'react-redux';
import { requestDataActions } from '../model/slice/requestSlice';

interface BlockCheckboxFilterProps extends PropsWithChildren {
    className?: string;
    titleFilter: string;
    arrValues?: reqGenresMovie[];
    params?: RequestKeyType;
    typeData?: string;
    valueData?: string | [] | boolean | number;
}

export const BlockCheckboxFilter: FC<BlockCheckboxFilterProps> = ({
    className,
    titleFilter,
    arrValues,
    params,
}) => {
    const dispatch = useDispatch();

    const [showFilter, setShowFilter] = useState(false);
    const [valueInput, setValueInput] = useState<string>(null);
    const [arsValues, setArsValues] = useState<string[]>([]);

    const handlerShowFilter = () => {
        setShowFilter(!showFilter);
    };

    useEffect(() => {
        if (valueInput) {
            setArsValues([
                ...arsValues,
                valueInput,
            ]);
        }
    }, [valueInput]);

    useEffect(() => {
        if (arsValues.length === 0) {
            dispatch(requestDataActions.requestMoviesArr({
                key: params,
                value: null,
            }));
        } else {
            dispatch(requestDataActions.requestMoviesArr({
                key: params,
                value: arsValues,
            }));
        }
    }, [arsValues]);

    const handlerInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setValueInput(e.target.value);
        } else {
            const arr = arsValues.filter((item, index, arr) => item !== e.target.value);
            setArsValues(arr);
        }
    };

    return (
        <div
            className={classNames(cls.wrapperInput, {}, [className])}
        >
            <h3
                className={cls.titleBlockFilter}
                onClick={handlerShowFilter}
            >
                {titleFilter}
            </h3>
            <div className={classNames(cls.asideInputsFilter, { [cls.showFilterPanel]: showFilter }, [])}>
                <div className={cls.inputBlockFilter}>
                    {
                        arrValues.map((value: string) => (
                            <div
                                className={cls.asideInput}
                                key={value}
                            >
                                <label className={cls.labelFilter}>
                                    <div>{value}</div>
                                    <Input
                                        type={'checkbox'}
                                        name={titleFilter}
                                        value={value}
                                        className={cls.inputFilter}
                                        handleChange={handlerInputValue}
                                    />
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

