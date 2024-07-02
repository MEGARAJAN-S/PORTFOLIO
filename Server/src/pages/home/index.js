import React from "react";
import Header from "../../components/header";
import Intro from "./intro";
import About from "./about";
import Experience from "./education";
import Hello from "./hello";
import Achivements from "./achivements";
import Internship from "./internship";
import Project from "./project";
import Footer from "./footer";
import Sider from "./sider";

function Home(){
    return (
        <div>
            <Header />
            <div className="bg-primary px-40 sm:px-5">
            <Intro />
            <About />
            <Experience />
            <Internship />
            <Project />
            <Achivements />
            <Hello />
            <Footer />
            </div>
            <Sider />
        </div>
    )
}

export default Home