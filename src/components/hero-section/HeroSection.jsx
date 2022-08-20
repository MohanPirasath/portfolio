


import React,{useRef,useEffect} from "react";
import {init} from "ityped";

import Typewriter from "typewriter-effect"
import {useNavigate} from "react-router-dom"


// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import IconButton from "@mui/material/IconButton";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";

import "./Herosection.css"
import { Container,Row,Col } from "reactstrap";
import Profile_picutres from "../../Assests/profile_pic.jpg"



const HeroSection =()=>{


    const navigate = useNavigate()



// const textRef = useRef()
// useEffect(()=>{
//     return(
// init(textRef.current,{
//     backDelay:1500,
//     showCursor:true,
//     backSpeed:60,
//     strings:[
//         'Mohan Pirasath',
//         // 'MERN Stack Developer',
//         // 'Enthusiastic Developer',
        
//     ]
// })
// )},[])
    return(
        <section className="hero_section" id="home">
       <Container>
        <Row>
            <Col lg="6" md="6">
            <div className="hero_content">
{/* welcome,we are a team because we respect,trust and care for each other */}
           <p className="mb-3">Welcome,we are a team because we respect,trust and care for each other</p>
            <h5 className="mb-4">Hi ,</h5>
                <div className="make_line">
            <h2 className="hero_title mb-4">

                I'm <span > 
                     <Typewriter 
           
           options={{ 
           strings:[" Mohan Pirasath.", " MERN Stack Developer.", " Enthusiastic Developer."],
           autoStart:true,
           delay:75,
           loop:true
           }}
           
           /> 
           </span>
            </h2>
                </div>
            <p>
            A MERN Stack developer specialized in Full Stack Web Application,done numerous projects involving front and back end technologies.I am excited to be at a deployment phase of my career as a Full stackdeveloper
            </p>
              <div className="hero_btns mb-4">
                   {/* <button className="btn hire_btn"><a href="#">Hire Me</a></button> */}
                   {/* <button className="btn get" ><a href="#">Get Resume</a></button> */}
                 <a href="https://drive.google.com/file/d/1731oIMBMINqsybYCFsetx60PgSfN606b/view?usp=sharing" target="_blank" className="atag"> <button className="btn"
                //   onClick={()=>{navigate("/resume")}}
                  >GET RESUME</button> </a>

              </div>

                
            </div>
            </Col>
            <Col lg="6" md="6">
                <div className="hero_img">
               
                    <img src= {Profile_picutres} alt="jju" className="w" />
                </div>
            </Col>
        </Row>
       </Container>
       </section>
    )
}


export default HeroSection