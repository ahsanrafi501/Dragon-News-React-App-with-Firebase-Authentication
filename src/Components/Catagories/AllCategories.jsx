import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("/categories.json").then(res => res.json());

const AllCatagories = () => {

    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Catagories ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-5'>
                {
                    categories.map(singleCategory => 
                        <NavLink to={`/category/${singleCategory.id}`} key={singleCategory.id} className={"btn shadow-none text-accent bg-white border-0 hover:bg-base-200"}>{singleCategory.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default AllCatagories;