

import React,{useState} from "react";
import "./form.css"


const Form = () =>{

const[entername,setname]=useState("")
const[enteremail,setemail]=useState("")
const[entermessage,setmessage]=useState("")

const Submithandler= (e)=>{
e.preventDefault()
console.log("submited")
}

    return(
        <form className="form" onSubmit={Submithandler}>
            {/* <div className="form_input"> */}
                <input type="text" placeholder="Your Name" value={entername} onChange={(e)=>{setname(e.target.value)}}/>
            {/* </div> */}
            {/* <div className="form_input"> */}
                <input type="email" placeholder="Your Email-ID" value={enteremail} onChange={(e)=>{setemail(e.target.value)}}/>
            {/* </div> */}
            {/* <div className="form_input"> */}
                <textarea  placeholder="Message"  value={entermessage} onChange={(e)=>{setmessage(e.target.value)}}></textarea>
            {/* </div> */}
            {/* <div className="form_input"> */}
                <button className="submit_btn" type="submit">Submit</button>
            {/* </div> */}
        </form>
    )
}


export default Form;





