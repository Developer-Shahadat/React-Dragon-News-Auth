import React from "react";
import HeaderPage from "../Shared/Header/HeaderPage";
import NavBarPage from "../Shared/NavBar/NavBarPage";

import RightSideNav from "../Shared/Right-Side-Nav/RightSideNav";
import LeftSideNav from "../Shared/Left-Side-Nav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsShow from "./NewsShow";

const HomePage = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  return (
    <div>
      <HeaderPage></HeaderPage>
      <BreakingNews></BreakingNews>
      <NavBarPage></NavBarPage>
     

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="md:col-span-2 border">
          {
            newsData.map(item => <NewsShow key={item._id} news={item}></NewsShow>)
          }
        </div>

        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
