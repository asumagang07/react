import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainDiv from "../components/MainDiv";
import Nav from "../components/Nav";
import ActivityBar from "../components/ActivityBar";
import Sidebar from "../components/Sidebar";
import RouterPage from "./RouterPage";
import DraggableTabs from "../components/DraggableTabs";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <MainDiv>
        <ActivityBar />
        <Sidebar />
        <RouterPage>
          <DraggableTabs />
        </RouterPage>
      </MainDiv>
      <Footer />
    </div>
  );
}

export default Home;
