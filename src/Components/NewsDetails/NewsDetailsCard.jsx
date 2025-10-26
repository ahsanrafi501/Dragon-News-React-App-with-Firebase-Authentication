import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
//   console.log(news);
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img className="w-screen px-7 py-5" src={news.image_url} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p>{news.details}</p>
        <div className="card-actions justify-start mt-5">
          <Link to={"/"} className="btn btn-primary"><FaArrowLeft />All news in this category</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
