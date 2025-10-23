import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CategoryNewsCard from './NewsCard';

const CategoryNews = () => {

    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])
    const {id} = useParams()

    useEffect(()=> {
        if(id=="0"){
            setCategoryNews(data)
        }
        else if(id=="1"){
            const filteredData = data.filter(news => news.others.is_today_pick === true);
            setCategoryNews(filteredData);
        }
        else{
            const filteredData = data.filter(news => news.category_id == id);
            setCategoryNews(filteredData);
        }
    },[id, data])
    return (
        <div>
            <div className='font-bold text-xl'>Total {categoryNews.length} Category News</div>
            <div>
                {
                    categoryNews.map(news => <CategoryNewsCard key={news.id} news={news}></CategoryNewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;