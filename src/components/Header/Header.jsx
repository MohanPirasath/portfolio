




import React ,{useRef,useEffect}from "react";
import { Container } from "reactstrap";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'; 
import {useNavigate} from "react-router-dom"

const nav=[
    {
      display:"Home",
      url:"#home"
    },
    {
      display:"About",
      url:"#about"
    },
    {
      display:"Services",
      url:"#services"
    },
    {
      display:"Projects",
      url:"#projects"
    },
    {
      display:"Contact",
      url:"#contact"
    }
  ]




const Header =()=>{

const navigate = useNavigate()

const headerRef = useRef(null)
const menuRef = useRef(null);

useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
    ){
      headerRef.current.classList.add("header_shrink");
    }else{
      headerRef.current.classList.remove("header_shrink");
    }
  });
  // return ()=>{
  //   window.removeEventListener("scroll")
  // }
},[])

const menuToggle = () => menuRef.current.classList.toggle("menu_active")



const handleClick=(e)=>{
e.preventDefault()
const targetAttr=e.target.getAttribute("href")
const location = document.querySelector(targetAttr).offsetTop

window.scroll({
  left:0,
  top:location - 70
})
}


    return(
        <header className="header" ref={headerRef}>
             <Container>
                <div className="navigation">
                 <div className="logo">
                    <h5>
                        Web Developer
                    </h5>
                 </div>

                 <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                    <ul className="nav_list">
                        {
                            nav.map((item,index)=>{
                                return(
                                    <li className="nav_item" key={index}>
                                      <a href={item.url} onClick={handleClick}>{item.display}</a>

                                    </li>

                                )
                            })
                        }
                       
                    </ul>
                 </div>
                 <div className="nav_right">
                  <button className="btn" onClick={()=>{navigate("/resume")}}>GET RESUME</button>
                  <span className="mobile_menu">
                  <IconButton aria-label="menu" sx={{color:"whitesmoke",fontSize:"1.3rem"}} onClick={menuToggle} >
                    <MenuIcon   />
                  </IconButton>
                    
                    {/* <i class="ri-menu-5-line"></i> */}
                  {/* <i class="ri-menu-5-line"  onClick={menuToggle}></i> */}
                  {/* <i class="ri-building-3-line"></i> */}
                  </span>
                 </div>
                </div>
             </Container>
        </header>
    )
}

export default Header;