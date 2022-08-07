

import React from "react";
import "./experience.css"
import { Container,Row,Col } from "reactstrap";



const Experience = ()=>{

const ExperienceData=[
    {
    year:"2021 - 2022",
    title:"Developed Rental App",
    des:"The Rental app where we can take the available products for rent. The price may variee for products and price is also depend upon the time of the rental",

},
    {
    year:"2021 - 2022",
    title:"Food Token Generater",
    des:"The food token genetator application which contain Request token page for every users and the request has to be accepted by Admin once the admin accepted the token will generated",

},
    {
    year:"2021 - 2022",
    title:"Amazon-clone",
    des:" The E-commers Web Application which is the clone of Amazon application.The application contains login, signup, Add to cart, CheckOut page and the payment page.",

},
//     {
//     year:"2021 - 2022",
//     title:"Developed Rental App",
//     des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Eos nisi consequuntur tenetur sed totam laudantium natus nemo facilis libero enim nam quaerat, molestiae vitae fugiat dicta magnam, illo, qui vel!",

// },

]



    return(
        <section id="">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                    <h2>
                       Project Experience
                    </h2>
                    </Col>
                    <Col lg="6" md="6">
                    <div className="single_experience-container">

                        {
                            ExperienceData.map((item,index)=>{
                                return(
                                    <div className="single_experience" key={index}>
                                    <span className="experience_icon">
                                    <i class="ri-briefcase-2-line"></i>
                                    </span>
                                    <h6>
                                        {item.year}
                                    </h6>
                                    <h5>
                                       {item.title}
                                    </h5>
                                    <p>
                                           {item.des}
                                    </p>
                                </div>
                                )
                            })
                        }

                       
                       
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience;








