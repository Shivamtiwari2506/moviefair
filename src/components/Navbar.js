import React, { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = () => {

  const[show,setShow]= useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100) setShow(true)
      else setShow(false)
    });

    return ()=>{
      window.removeEventListener("scroll",()=>{});
    }
  },[])

  return (
    <div className={`navbar ${show && "nav__black"}`}>
        <img
                className="nav__logo"
                src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="NETFLIX" />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="AVATAR"
            />
    </div>
  )
}

export default Navbar