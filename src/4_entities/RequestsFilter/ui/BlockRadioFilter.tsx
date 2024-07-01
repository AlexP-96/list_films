import {
    FC,
    PropsWithChildren,
    useEffect,
    useState,
} from 'react';

import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import { RequestKeyType } from '../model/types/requestSchema';
import cls from './BlockRadioFilter.module.scss';
import { Input } from '6_shared/ui/Input/Input';
import {
    useDispatch,
} from 'react-redux';
import { requestDataActions } from '../model/slice/requestSlice';

interface BlockRadioFilterProps extends PropsWithChildren {
    className?: string;
    titleFilter: string;
    arrValues?: string[];
    params?: RequestKeyType;
    typeData?: string;
    valueData?: string | [] | boolean | number;
}

export const BlockRadioFilter: FC<BlockRadioFilterProps> = ({
    className,
    titleFilter,
    arrValues,
    params,
    typeData,
    valueData,
}) => {
    const dispatch = useDispatch();

    const [showFilter, setShowFilter] = useState(false);
    const [valueInput, setValueInput] = useState<string | boolean>(null);

    const handlerShowFilter = () => {
        setShowFilter(!showFilter);
    };

    useEffect(() => {
        if (valueInput) {
            switch (typeData) {
                case 'string':
                    dispatch(requestDataActions.requestMovies({
                        key: params,
                        value: valueInput,
                    }));
                    break;
                case 'number':
                    dispatch(requestDataActions.requestMovies({
                        key: params,
                        value: Number(valueInput),
                    }));
                    break;
                case 'boolean':
                    if (valueInput === 'true') {
                        dispatch(requestDataActions.requestMovies({
                            key: params,
                            value: true,
                        }));
                    } else if (valueInput === 'false') {
                        dispatch(requestDataActions.requestMovies({
                            key: params,
                            value: false,
                        }));
                    }
                    break;
                case 'array':
                    dispatch(requestDataActions.requestMovies({
                        key: params,
                        value: [valueInput],
                    }));
                    break;
            }
        }
    }, [valueInput]);

    //@ts-ignore
    const handlerInputValue = (e) => {
        setValueInput(e.target.value);
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
                                        type={'radio'}
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

