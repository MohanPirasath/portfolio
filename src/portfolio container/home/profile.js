import React, { Component,useRef,useEffect} from 'react'
import {init} from "ityped";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// import Typewriter from "typewriter-effect"

import { Button } from '@mui/material';

import "./profile.css"


export default function Profile() {


    const textRef = useRef()
    useEffect(()=>{
    init(textRef.current, {
        backDelay:1500,
        showCursor:true,
        strings:[
            'Mohan Pirasath',
            'MERN Stack Developer',
            'Enthusiastic Developer',
            'MERN Stack Developer',

        ]
    })
    },[])



  return (
    <div className="profilecontainer">
      <div className="profileparent">
        <div className="profiledetails">
          <div className="colz">
            <div className='colz-icon'>
            <IconButton onClick={() => {}}>
              <a href="#">
                <LinkedInIcon />
              </a>
            </IconButton>

            <IconButton onClick={() => {}}>
              <a href="#">
                <InstagramIcon />
              </a>
            </IconButton>

            <IconButton onClick={() => {}}>
              <a href="#">
                <FacebookIcon />
              </a>
            </IconButton>

            <IconButton onClick={() => {}}>
              <a href="#">
                <TwitterIcon />
              </a>
            </IconButton>
            </div>
     
          </div>
          <div className="profile-name">
            HELLO, I'M <span className="highliteit">MOHAN PIRASATH</span>
          </div>
          <div className="details-role">
            <span className="primary-text " ref={textRef}>
              <h1>



                
                {/* {" "} */}
                {/* <Typical
                             steps={
                                [
                                    "Full stack developer 💻",
                                    1500,
                                    "MERN Stack developer 🌐",
                                    1500,
                                    "Protagonist developer 😎",
                                    1200
                                ]
                             }
                             loop={Infinity}

                             /> */}
             
              </h1>
              </span>
              <span className='profiletagline'>
         Knack and excited to building application with Front end ,DB and Backend operations.
              </span>
          </div>
          <div className='profile-option'>
            <Button variant="outlined" className='hirebtn'>
              Hire Me
            </Button>
            <a href='../../pic/Resume_logo.jpeg' download="resume.png">
            <Button variant="contained" color="success" className='resumebtn'>
              Get Resume
            </Button>
            </a>
          
          </div>
        </div>
        <div className='profilepic'>
          <div className='profileimg'>

          </div>

        </div>
      </div>
    </div>
  );
}


