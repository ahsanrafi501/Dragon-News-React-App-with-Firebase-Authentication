import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import RightAside from '../../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../../Components/NewsDetails/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    // console.log(data)
    const {id} = useParams();
    // console.log(id)

    const [news, setNews] = useState({})

    useEffect(() => {
        const newsDetails = data.find(singleData => singleData.id == id);
        setNews(newsDetails)
    },[id, data])

    // console.log(news)
    return (
        <div>
            <header className='my-5'>
                <Header></Header>
            </header>
            <div className='w-11/12 m-auto grid grid-cols-12 gap-5 py-5'>
                <div className='col-span-9'>
                    <h2 className='font-bold mb-5'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </div>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;