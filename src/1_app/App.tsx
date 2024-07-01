import React, {useEffect, useState} from 'react';
import './styles/index.scss';
import {HomePage} from "2_pages/homePage";
import {StoreProvider} from '1_app/providers/storeProvider';

const App = () => {
    return (
        <StoreProvider>
            <div className='app'>
                <div>
                    <HomePage/>
                </div>
            </div>
        </StoreProvider>
    );
};

export default App;