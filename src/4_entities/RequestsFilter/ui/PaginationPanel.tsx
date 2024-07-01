import {
    FC,
    PropsWithChildren,
    SyntheticEvent,
    useEffect,
    useState,
    MouseEvent,
} from 'react';

import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import { Button } from '../../../6_shared/ui/Button/Button';
import { responseSizePageSelector } from '../../Movie/model/selectors/MovieSelectors/MovieSelectors';
import { requestCountPageVisibleSelector } from '../model/selectors/getBlockFilterValue/requestDataMovie';
import { requestDataActions } from '../model/slice/requestSlice';
import { RequestKeyType } from '../model/types/requestSchema';
import cls from './Pagination.module.scss';
import {
    useDispatch,
    useSelector,
} from 'react-redux';

import ReactPaginate from 'react-paginate';

interface PaginationPanelProps extends PropsWithChildren {
    className?: string;
    titleFilter?: string;
    arrValues?: string[];
    params?: RequestKeyType;
    typeData?: string;
    valueData?: string | [] | boolean | number;
}

export const PaginationPanel: FC<PaginationPanelProps> = ({
    className,
}) => {
    const dispatch = useDispatch();

    const totalPages = useSelector(responseSizePageSelector);
    const visiblePages = useSelector(requestCountPageVisibleSelector);
    const [count, setCount] = useState<number>(0);


    useEffect(
        () => {
            if (totalPages && visiblePages) {
                let countPage = totalPages / visiblePages;
                setCount(countPage);
            }
        },
        [
            totalPages,
            visiblePages,
        ],
    );

    const handlePageClick = (e: { nextSelectedPage: number }) => {
        dispatch(requestDataActions.requestPage(e.nextSelectedPage));
    };

    return (
        <div
            className={classNames(cls.paginationPanel, {}, [className])}
        >
            <ReactPaginate
                className={cls.pagination}
                breakLabel='...'
                nextLabel='next >'
                onClick={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={count}
                previousLabel='< previous'
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

