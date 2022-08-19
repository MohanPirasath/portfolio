

import React from "react";
import "./contact.css"
import { Container,Row,Col } from "reactstrap";
import Form from "../form/Form";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';

const ContactMe = () =>{
    return(
        <section id="contact">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2>
                            Get In Touch
                        </h2>
                    </Col>
                    <Col lg="12" md="12">
                    <div className="contact_info-container">
                        <div className="single_info_box">
                            <h6>
                                Address
                            </h6>
                            <p>
                                No:31,ANNA STREET,AVVAI NAGAR,PADI
                            </p>
                        </div>
                        <div className="single_info_box">
                            <h6>
                                phone:
                            </h6>
                            <p>
                                7871012624
                            </p>
                        </div>
                       
                    </div>
                    <div className="contact_info-container">
                    <div className="single_info_box">
                            <h6>
                                Email-Id:
                            </h6>
                            <p>
                                mahendran.mohanmass2000@gmail.com
                            </p>
                        </div>
                        <div className="single_info_box">
                            <h6>
                                Location
                            </h6>
                            <p>
                                Chennai-600050
                            </p>
                        </div>
                       
                    </div>
                    </Col>
                    <Col lg="6" md="6">
                    {/* <Form/> */}
                    <span className="space">
                                    <a href="http://www.linkedin.com/in/mohan-pirasath"target="_blank"> <LinkedInIcon /></a>
                                </span>
                                    <span className="space">
                                    <a href="https://github.com/MohanPirasath" target="_blank"><GitHubIcon/></a>
                                    </span>
                                    <span className="space">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahendran.mohanmass2000@gmail.com" target="_blank"><EmailIcon/></a>
                                    </span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default ContactMe;









