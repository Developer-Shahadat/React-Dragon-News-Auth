import React from "react";
import { Link } from "react-router-dom";


const NewsShow = ({ news }) => {
  const { title, image_url, details, _id } = news;
  

  return (
    <div className="card  bg-base-100 shadow-xl mt-10">
      <figure>
        <img src={image_url} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 170)}
            <Link to={`/news/${_id}`} className="text-cyan-600 text-lg">Read More.....</Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      
    </div>
  );
};

export default NewsShow;
