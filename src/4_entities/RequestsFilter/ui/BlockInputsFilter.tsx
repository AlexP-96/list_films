import {
    ChangeEvent,
    ChangeEventHandler,
    FC,
    FormEvent,
    PropsWithChildren,
    useEffect,
    useState,
} from 'react';

import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import { useDispatch } from 'react-redux';
import { log } from 'util';
import { requestDataActions } from '../model/slice/requestSlice';
import { RequestKeyType } from '../model/types/requestSchema';
import cls from './BlockInputsFilter.module.scss';
import { Text } from '6_shared/ui/Text/Text';
import { Input } from '6_shared/ui/Input/Input';
import { Button } from '6_shared/ui/Button/Button';

interface BlockInputsFilterProps extends PropsWithChildren {
    className?: string;
    titleFilter: string;
    params?: { keyOne: RequestKeyType, keyTwo: RequestKeyType };
}

export const BlockInputsFilter: FC<BlockInputsFilterProps> = ({
    className,
    titleFilter,
    params,
}) => {

    const dispatch = useDispatch();
    const [showFilter, setShowFilter] = useState(false);
    const [minValue, setMinValue] = useState<number | null>(null);
    const [maxValue, setMaxValue] = useState<number | null>(null);

    const {
        keyOne,
        keyTwo,
    } = params;

    const handlerShowFilter = () => {
        setShowFilter(!showFilter);
    };

    useEffect(
        () => {

        },
        [
            minValue,
            maxValue,
        ],
    );

    const handlerChange = (e: ChangeEvent<HTMLInputElement>, state: string) => {
        if (state === 'min') {
            if (Number(e.target.value) === 0 || undefined) {
                setMinValue(null);
            } else {
                setMinValue(Number(e.target.value));
            }
        }
        if (state === 'max') {
            if (Number(e.target.value) === 0 || undefined) {
                setMaxValue(null);
            } else {
                setMaxValue(Number(e.target.value));
            }
        }
    };

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(requestDataActions.requestMovieMinMax({
            keyOne,
            valueOne: minValue,
            keyTwo,
            valueTwo: maxValue,
        }));
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
            <form className={classNames(cls.asideInputsFilter, { [cls.showFilterPanel]: showFilter }, [])}>
                <div className={cls.inputsFilter}>
                    <div className={cls.inputBlockFilter}>
                        <Text className={cls.textInput}>
                            min
                        </Text>
                        <div className={cls.asideInput}>
                            <Input
                                type={'number'}
                                className={cls.inputFilter}
                                handleChange={(e) => handlerChange(e, 'min')}
                            />
                        </div>
                    </div>
                    <div className={cls.inputBlockFilter}>
                        <Text className={cls.textInput}>
                            max
                        </Text>
                        <div className={cls.asideInput}>
                            <Input
                                type={'number'}
                                className={cls.inputFilter}
                                handleChange={(e) => handlerChange(e, 'max')}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    submit={handleClick}
                >accept</Button>
            </form>
        </div>
    );
};

