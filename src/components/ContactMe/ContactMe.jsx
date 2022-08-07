

import React from "react";
import "./contact.css"
import { Container,Row,Col } from "reactstrap";
import Form from "../form/Form";

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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default ContactMe;









