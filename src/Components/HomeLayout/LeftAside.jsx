import React, { Suspense } from 'react';
import AllCatagories from '../Catagories/AllCategories';
import { HashLoader } from 'react-spinners';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<HashLoader></HashLoader>}>
                <AllCatagories></AllCatagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;