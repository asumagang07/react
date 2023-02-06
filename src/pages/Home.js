import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainDiv from "../components/MainDiv";
import Nav from "../components/Nav";
import ActivityBar from "../components/ActivityBar";
import Sidebar from "../components/Sidebar";
import RouterPage from "./RouterPage";
import DraggableTabs from "../components/DraggableTabs";
import {tabs} from "../utils/tabs";

function Home() {
  const [newTabs, setTabs] = useState(tabs);

  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <MainDiv>
        <ActivityBar />
        <Sidebar />
        <RouterPage>
          <DraggableTabs tabs={tabs}/>
        </RouterPage>
      </MainDiv>
      <Footer />
    </div>
  );
}

export default Home;
