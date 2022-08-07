

import React from "react";
import "./services.css"
import {Container,Row,Col} from "reactstrap"
import CodeIcon from '@mui/icons-material/Code';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';




const serviceData=[
    {
    icon: <DisplaySettingsIcon/>,
    title: "Web App Development",
    des:" I can create Web Application with Responsiness by using ReactJs,NodeJS,ExpressJS And MongoDB.I Able to interact with team and understand functional requirements and I had awareness about system design And deployment in AWS",
},
    {
    icon: <i class="ri-code-s-slash-line"></i>,
    title: "FrontEnd developer",
    des:"I will Bulid reusable components and front end libraries,which can be used across project .I use React framework, Bootstrap, MUI and CSS to make websites responsive. Accessibility and performance optimisations of websites across devices.I had practice with Rest API ",
},
    {
    icon: <CodeIcon/>,
    title: "BackEnd developer",
    des:"As a backend developer i can work with NodeJs, ExpressJS, MongoDB and MYSQL. I am familiarity with servers and had knowledge about APIs. I have created a numerous projects with backend technologies. I have Proficient in developer tools like GitHub ",
},
]


const Services = () =>{
    return(
       <section id="services">
          <Container>
            <Row>
                <Col lg="12" className="service_top mb-5">
                    <h6>
                        Features
                    </h6>
                    <h2>
                        What services I provide
                    </h2>
                </Col>
                    {
                        serviceData.map((item,index)=>{
                            return(
                <Col lg="4" md="6" sm="6" key={index} className ="mb-4">
                                <div className="single_service">
                                <span className="service_icon">
                                    {item.icon}
                                </span>
                                <h2>
                                    {item.title}
                                </h2>
                                <p>
                                   {
                                    item.des
                                   }
                                </p>
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




export default Services;




