import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, rating, total_view, thumbnail_url, details } = news;

  return (
    <div className="card my-5  w-full bg-base-100 shadow-md rounded-2xl border border-base-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-500">
          <FaRegBookmark className="hover:text-primary cursor-pointer" />
          <FaShareAlt className="hover:text-primary cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <figure className="rounded-xl overflow-hidden mb-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full object-cover"
          />
        </figure>
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <p className="text-sm text-gray-500">{total_view} views</p>
      </div>
    </div>
  );
};

export default NewsCard;
