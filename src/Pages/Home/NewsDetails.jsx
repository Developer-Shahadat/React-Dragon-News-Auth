import React from "react";
import { useParams } from "react-router-dom";
import RightSideNav from "../Shared/Right-Side-Nav/RightSideNav";
import HeaderPage from "../Shared/Header/HeaderPage";
import NavBarPage from "../Shared/NavBar/NavBarPage";

const NewsDetails = () => {
  const { id,title, image_url, details } = useParams();
  return (
    <div>
        <HeaderPage></HeaderPage>
        <NavBarPage></NavBarPage>
      <div className="grid md:grid-cols-4">
            <div className="col-span-3">
            <h2 className="text-3xl">Dragon News</h2>
            <p>{id}</p>
            <img src={image_url} alt="" />
            <h3>{title}</h3>
            <p>{details}</p>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>    

    </div>
  );
};

export default NewsDetails;
