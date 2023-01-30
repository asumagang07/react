import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainDiv from "../components/MainDiv";
import Nav from "../components/Nav";
import ActivityBar from "../components/ActivityBar";
import Sidebar from "../components/Sidebar";
import RouterPage from "./RouterPage";
import { Route, Routes } from "react-router-dom"
import Profile from "./Profile";
import Services from "./Services";


function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <MainDiv>
        <ActivityBar />
        <Sidebar />
        <RouterPage>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </RouterPage>
      </MainDiv>
      <Footer />
    </div>
  );
}

export default Home;
