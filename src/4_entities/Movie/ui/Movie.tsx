import React, {useEffect, useState} from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import cls from './Movie.module.scss';
import {RequestManager} from "6_shared/api/apiEndpoints/movieApi";
import {Virtuoso} from "react-virtuoso";
import {MovieItem} from "4_entities/Movie/ui/MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "4_entities/Movie/model/slice/MovieSlice";
import {
    responseDataMovieSelector,
    responseLoadingSelector
} from "4_entities/Movie/model/selectors/MovieSelectors/MovieSelectors";
import {
    requestDataMovieSelector
} from "4_entities/BlockRadioFilter/model/selectors/getBlockFilterValue/requestDataMovie";


interface MovieProps {
    className?: string;
    children?: React.ReactNode;
}

export const manager = new RequestManager();

export const Movie = ({className}: MovieProps) => {
    const responseData = useSelector(responseDataMovieSelector)
    const requestData = useSelector(requestDataMovieSelector)
    const resLoading = useSelector(responseLoadingSelector)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.resLoading(true))
        manager.addData(requestData);
        manager.sendRequest()
            .then(res => {
                dispatch(movieActions.resLoading(false))
                dispatch(movieActions.resData(res.data.data));
            })
            .catch(err => {
                console.log(err)
            })
    }, [requestData]);

    if (responseData.data) {
        if (resLoading) {
            return <div>Loading</div>
        } else {
            return (
                <div className={classNames(cls.movie, {}, [className])}>
                    <div className={classNames(cls.wrapperMovie, {}, [''])}>
                        <Virtuoso
                            style={{height: '90vh'}}
                            totalCount={10}
                            data={responseData.data}
                            itemContent={(index, data) => {
                                return (
                                    <MovieItem
                                        key={data.id}
                                        obj={data}
                                    />
                                )
                            }}
                        />
                    </div>
                </div>
            );
        }

    }

};

