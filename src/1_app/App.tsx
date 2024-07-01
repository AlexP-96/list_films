import React, {
    useEffect,
} from 'react';
import './styles/index.scss';
import { HomePage } from '2_pages/homePage';
import { StoreProvider } from '1_app/providers/storeProvider';

const App = () => {
    useEffect(() => {
        console.log('эта панель недоступна, для глаз простых смертных');
    }, []);
    return (
        <StoreProvider>
            <div className='app'>
                <div>
                    <HomePage />
                </div>
            </div>
        </StoreProvider>
    );
};

export default App;