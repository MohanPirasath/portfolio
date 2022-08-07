

import React, { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../hero-section/HeroSection";
import About from "../About/About"
// import Profile from "./profile.jsx"
import Services from "../About/services/services";
import Experience from "../About/Experience/Experience";
import Projects from "../Projects/Projects";
// import Contact from "../About/Contact";
import ContactMe from "../ContactMe/ContactMe"
import Footer from "../footer/Footer";

const Layout = () =>{
    return(

        <Fragment>
<Header/>
<HeroSection/>
<About/>
<Services/>
<Experience/>
<Projects/>
<ContactMe/>
<Footer/>

        </Fragment>
        
    )
}

export default Layout;