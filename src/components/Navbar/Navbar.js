import React from 'react'
import "./Navbar.css"

// Icons specific
import { IconContext } from "react-icons";
import {SiCircleci} from "react-icons/si";
import {AiOutlineSearch} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BiTransfer} from "react-icons/bi";
import {IoMdExit} from "react-icons/io";

export default function Navbar() {
  return (
    <div className='navigation'>
        <div className='leftNav'>
          <a href="/"><span className="logo"><SiCircleci size= "1.5rem"/></span></a>
          <a href="/"><p className="webName">Sales machine</p></a>
        </div>

        <div className='centerNav'>
            <input className="sInput" type="text" placeholder='Search' />
            <span className="searchLogo"><a href="#"><AiOutlineSearch size= "1.3rem" color= "#BFBFBF"/></a></span>
        </div>

        <div className="rightNav">
            <a href="#"><span><CgProfile size= "2rem" color= "#BFBFBF"/></span></a>
          <IconContext.Provider value={{ size: "1.2rem", color: "#BFBFBF"}}>
            <a href="#"><span><BiTransfer/></span></a>
            <a href="#"><span><IoMdExit/></span></a>
          </IconContext.Provider>
        </div>
    </div>
  )
}
