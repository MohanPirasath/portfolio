

import React from "react";
import "./projects.css";
import { Container,Row,Col } from "reactstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';
import Amazon_clone_app from "../../Assests/Amazon_clone.png"
import Rental_pic from "../../Assests/Rental_app_pic.png"
import Food_pic from "../../Assests/Food_app_pic.png"
import File_it_img from "../../Assests/File_it_img.png"
import useNavigate from "react-router-dom"


const Projects = () =>{

const ProjectData=[
    {
        imgUrl:Rental_pic,
        title:"Rental app",
        des:" This app is the Rental app where we can take the available products for rent. The price may variee for products and price is also depend upon the time of the rental",
        Url:"https://snazzy-gingersnap-b37f5c.netlify.app/",
        git_f:"https://github.com/MohanPirasath/sec_hackathon",
        git_b:"https://github.com/MohanPirasath/hackathon2node"

    },
    {
        imgUrl:Food_pic,
        title:"Food Token Generater",
        des:"This is the food token genetator application which contain Request token page for every users and the request has to be accepted by Admin once the admin accepted the token will generated",
        Url:"https://mycapston.netlify.app/signup",
        git_f:"https://github.com/MohanPirasath/capston",
        git_b:"https://github.com/MohanPirasath/O_node_capston"

    },
    {
        imgUrl:Amazon_clone_app,
        title:"Amazon_clone",
        des:" This is the E-commers Web Application which is the clone of Amazon application.The application contains login, signup, Add to cart, CheckOut page and the payment page. ",
        Url:"https://eclectic-raindrop-78a01a.netlify.app",
        git_f:"https://github.com/MohanPirasath/amazon_clone",
        git_b:"https://github.com/MohanPirasath/Amazon_clone_node"

    },
    {
        imgUrl:File_it_img,
        des:"This App help us to share the experince of our day to day life to other peoples and we can like the post of other experirnce . it is a type of social media where we can post our special experience ",
        title:"FileIt App",
        Url:"https://file-it.netlify.app",
        git_f:"https://github.com/MohanPirasath/social-app",
        git_b:"https://github.com/MohanPirasath/social-server"

    },
]



    return(
        <section id="projects">
<Container>
    <Row>
        <Col lg="12" className="project_top mb-5" >
        <h6>
            Explore my projects here
        </h6>
        <h2>
            Projects
        </h2>
        <h5>Click the project and view live button for view our project live</h5>
        </Col>
        {
            ProjectData.map((item,index)=>{
                return(
                    <Col lg="4" md="6" sm="6" key={index}>
                    <div className="project_card">
                        <div className="project_img">
                            <img src={item.imgUrl} alt={item.title}/>
                        </div>
                        <div className="project_content">
                            <h5>{item.title}</h5>
                            <a href={item.Url}>View live</a>
        
                        </div>
                        </div>
                        <div className="project_des">
                        <p>
                        About: 
                        {item.des}
                            </p>  
                        </div>
                             <div className="git_link">
                                <a href={item.git_f} target="_blank">
                                <Fab variant="extended" size="medium" color="primary" aria-label="add" sx={{background:"#7865ff"}}>
                                <GitHubIcon/> <p>Front-End </p>
                                </Fab>
                                </a>
                                <a href={item.git_b} target="_blank">
                                <Fab variant="extended" size="medium" color="primary" aria-label="add"sx={{background:"#7865ff"}}>
                                <GitHubIcon/> <p>Back-End  </p> 
                                </Fab>
                                </a>
                             </div>
                         
                </Col>


                )
            })
        }
       
    </Row>
</Container>
        </section>
    )
}


export default Projects;



// ,width:"132px",height:'50px'
