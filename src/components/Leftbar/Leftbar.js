import React from 'react'
import "./Leftbar.css"
import "./LBmedia.css"
import "../../styles/universal.css"

// Icons Specific
import { IconContext } from "react-icons";
import {MdCreate, MdVerifiedUser, MdPeopleAlt, MdTranslate, MdLink, MdLanguage, MdSms} from "react-icons/md";
import {IoLogoLinkedin, IoIosCloud, IoMdMail, IoIosCall, IoIosCheckmarkCircle} from "react-icons/io";
import {SiGooglemeet} from "react-icons/si";
import {BsCalendarEvent} from "react-icons/bs";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="pname">
        <IconContext.Provider value={{ color: "#08464B", size: "1.5rem"}}><h3 className='inline fsh3'>Jean-Samuel Najnudel</h3> <span className='pvicon'><MdCreate /> <MdVerifiedUser /> </span>  </IconContext.Provider>
      </div>

      <p className='lightgrey textpresident fs1'>President</p>
      <div className=" fs1 ringoverbox">
        <p className='inline'>Ringover</p> 
        <span className='inline' className="slash"><b>|</b></span>
        <span className="people"><MdPeopleAlt size="1.2rem" color="#08464B"/> 101-250</span>
        <div><a className="ringoveremail" href="www.ringover.com">http:/www.ringover.com</a></div>
      </div>

      <hr className='linebreak1'/>
      <IconContext.Provider value={{ color: "#41BCC3", size: "2rem"}}><span className='socialicons'><IoLogoLinkedin/>  <IoIosCloud/></span></IconContext.Provider>
      <hr className='linebreak2'/>

      <p className="secondarycolor fs2"><b>Topis</b></p>
      <div className="topics fs1">
        <span>Same topic</span>
        <span>Some topic name</span>
      </div>

    {/* Contacts part */}
    <p className="secondarycolor fs2 pt25"><b>Contacts</b></p>
    <ol className='contacts fs2'>
    <IconContext.Provider value={{ color: "#08262E"}}>
      <li><IoMdMail className='socialicons2'/>j.najnudel@ringover.com</li>
      <li><IoIosCall className='socialicons2'/>+33 07 55 35 23 21 <span className="primarytext">Primary</span></li>
      <li><IoIosCall className='socialicons2'/>+33 99 53 05 19 21</li>
    </IconContext.Provider>
    </ol>

    {/* Additional part */}
    <p className="secondarycolor fs2 pt25"><b>Additional</b></p>
    <ol className='contacts fs2'>
    <IconContext.Provider value={{ color: "#08262E"}}>
      <li><IoMdMail className='socialicons2'/>president@ringover.com</li>
      <li><MdTranslate className='socialicons2'/>Francais</li>
      <li><MdLink className='socialicons2'/>www.youtube.com/ringover</li>
      <li><MdLanguage className='socialicons2'/>www.youtube.com/ringover</li>
    </IconContext.Provider>
    </ol>

    <div className="menubar">
      <div className="circle_call"><IoIosCheckmarkCircle size="4rem" color="#41BCC3"/></div>
      <div className="menus">
      <IconContext.Provider value={{size:"1.5rem", color: "#41BCC3"}}>
        <SiGooglemeet/>
        <BsCalendarEvent/>
        <IoMdMail/>
        <MdSms/>
      </IconContext.Provider>
      </div>
    </div>

    

    </div>
  )
}
