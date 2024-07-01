import React from 'react';
import {Movie} from "4_entities/Movie";
import {FilterPanel} from "3_widgets/filter_panel";
import cls from './Home.module.scss';

const Home = () => {
    return (
        <div className={cls.home}>
            <FilterPanel/>
            <Movie/>
        </div>
    );
};

export default Home;