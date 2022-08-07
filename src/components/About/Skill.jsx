

import React from "react";
import"./skill.css";

const Skills = ()=>{

const frontendSkill=[
    {
        title:"javascript",
        percentage:"85%"
    },
    {
        title:"React.js",
        percentage:"75%"
    },
    {
        title:"Bootstarp",
        percentage:"65%"
    },
    {
        title:"Material UI",
        percentage:"65%"
    },
    {
        title:"Git",
        percentage:"70%"
    },
]

const BackendSkill=[
    {
        title:"Node.js",
        percentage:"65%"
    },
    {
        title:"Express.js",
        percentage:"65%"
    },
    {
        title:"MongoDB",
        percentage:"75%"
    },
    {
        title:"MYSQL",
        percentage:"55%"
    },
    {
        title:"AWS",
        percentage:"40%"
    },
]

    return(
<div className="skill_wrapper">
<div className="frontend_skill w-50 ">
{
    frontendSkill.map((item,index)=>{
        return(
            <div className="skill_data mb-3" key={index}>
                <div className="skill_title">
                    <h6>
                        {
                            item.title
                        }
                    </h6>
                    <span>
                        {
                            item.percentage
                        }
                    </span>
                </div>
                <div className="skill_bar">
                    <span className="skill_bar_percentage" style={{width:`${item.percentage}`}}>

                    </span>
                </div>
            </div>
        )
    })
}
</div>
<div className="frontend_skill w-50 ">
{
    BackendSkill.map((item,index)=>{
        return(
            <div className="skill_data mb-3" key={index}>
                <div className="skill_title">
                    <h6>
                        {
                            item.title
                        }
                    </h6>
                    <span>
                        {
                            item.percentage
                        }
                    </span>
                </div>
                <div className="skill_bar">
                    <span className="skill_bar_percentage" style={{width:`${item.percentage}`}}>

                    </span>
                </div>
            </div>
        )
    })
}
</div>
</div>
    )
}


export default Skills;