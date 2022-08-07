
import React from 'react'
import './navbar.css'




 export default function Navbar(){

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
        display:"Arsenal",
        url:"#arsenal"
      },
      {
        display:"Contact",
        url:"#contact"
      }
    ]
  
    return(
      <div className='navbar'>
        <div>
<div className='logo'>
<h5>
    {" "}
</h5>
</div>
<div className='nav'>

            {
                nav.map((item,index)=>{
                    return(
                        <li className='nav-item'>
                            <a href={item.url}>{item.display}</a>
                        </li>
                    )
                })
            }
</div>


        </div>
        <div className='nav-right'>
{" "}
        </div>
      </div>
    )
  }
  
  
  
  