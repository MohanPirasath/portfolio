


import React,{useState} from "react";
import "./about.css";
import {Container,Row,Col} from "reactstrap"

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';

import Education from "./Education";
import Skills from "./Skill";
import Contact from "./Contact"
import Profile_picutres from "../../Assests/Profile_pic2.png"



const About=()=>{
    const [aboutme,setaboutme]=useState("ABOUT")
    return(
       <section id="about">
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                    <h2>
                        About Me
                    </h2>
                </Col>
                <Col lg="4" md="3">
                    <div className="about_btns">
                        <button className={`about_btn ${aboutme==="ABOUT"?'about_btn-active':""}`} onClick={()=>{
                            setaboutme('ABOUT')
                        }}>About Me</button>
                        <button className={`about_btn ${aboutme==="EDUCATION"?'about_btn-active':""}`}onClick={()=>{
                            setaboutme('EDUCATION')
                        }}>Education</button>
                        <button className={`about_btn ${aboutme==="SKILLS"?'about_btn-active':""}`}onClick={()=>{
                            setaboutme('SKILLS')
                        }}>Skills</button>
                        <button className={`about_btn ${aboutme==="CONTACT"?'about_btn-active':""}`}onClick={()=>{
                            setaboutme('CONTACT')
                        }}>Contact</button>
                        {/* <button className="about_btn">About Me</button> */}

                    </div>
                </Col>
                <Col lg="8" md="9">
                   {
                    aboutme ==="ABOUT" ? <div className="about_content_wrapper d-flex gap-5">
                    <div className="about_img w-25">
                        <img src={Profile_picutres}
                         alt="profile-pic" className="w-100 profile_pic"/>
                    </div>
                    <div className="about_content w-75">
                        <h2>
                            I'm Mohan Pirasath
                        </h2>
                        <p>
                        A MERN Stack developer specialized in Full Stack Web Application.I can design a complete web application and debugging.I write reuseable,testable and efficent codes by working on the frontend , backend and database.
                        </p>

                            <div className="social_links">
                                <h6 className="mb-2">
                                    Connect with me 
                                </h6>
                                <span>
                                    <a href="http://www.linkedin.com/in/mohan-pirasath"target="_blank"> <LinkedInIcon /></a>
                                </span>
                                    <span>
                                    <a href="https://github.com/MohanPirasath" target="_blank"><GitHubIcon/></a>
                                    </span>
                                    <span>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahendran.mohanmass2000@gmail.com" target="_blank"><EmailIcon/></a>
                                    </span>
                                    {/* <span>
                                    <a href="#"><InstagramIcon/></a>
                                    </span> */}
                            </div>

                    </div>
                </div>:" "
                   }

                    {
                        aboutme==="EDUCATION"? <Education/>:""
                    }
                    {
                        aboutme==="SKILLS"? <Skills/>:""
                    }
                    {
                        aboutme==="CONTACT"? <Contact/>:""
                    }

                </Col>
            </Row>
        </Container>

       </section>
    )
}

export default About;

