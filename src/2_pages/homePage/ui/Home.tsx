import React from 'react';
import {Movie} from "4_entities/Movie";
import {FilterPanel} from "3_widgets/filter_panel";
import { PaginationPanel } from '../../../4_entities/RequestsFilter/ui/PaginationPanel';
import cls from './Home.module.scss';

const Home = () => {
    return (
        <div className={cls.home}>
            <FilterPanel/>
            <Movie/>
            <PaginationPanel/>
        </div>
    );
};

export default Home;