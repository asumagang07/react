import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainDiv from "../components/MainDiv";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Nav/>
      <MainDiv>
        <SideBar/>
      </MainDiv>
      <Footer/>
    </div>
  );
}

export default Home;
