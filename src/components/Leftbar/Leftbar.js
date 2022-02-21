import React from 'react'
import "./Leftbar.css"
import "./LBmedia.css"

// Icons Specific
import { IconContext } from "react-icons";
import {MdCreate, MdVerifiedUser, MdPeopleAlt, MdTranslate, MdLink, MdLanguage, MdSms, MdOutlineCancel} from "react-icons/md";
import {IoLogoLinkedin, IoIosCloud, IoMdMail, IoIosCall, IoIosCheckmarkCircle} from "react-icons/io";
import {SiGooglemeet} from "react-icons/si";
import {BsCalendarEvent} from "react-icons/bs";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="pname">
        <IconContext.Provider value={{ color: "#08464B", size: "1.1rem"}}><h3 className='inline fsh3'>Jean-Samuel Najnudel</h3> <span className='pvicon'><MdCreate /> <MdVerifiedUser /> </span>  </IconContext.Provider>
      </div>

      <p className='lightgrey textpresident fs1'>President</p>
      <div className=" fs1 ringoverbox">
        <p className='inline'>Ringover</p> 
        <span className='inline slash'><b>|</b></span>
        <span className="people"><MdPeopleAlt size="0.8rem" color="#08464B"/> 101-250</span>
        <div><a className="ringoveremail" href="www.ringover.com">http:/www.ringover.com</a></div>
      </div>

      <hr className='linebreak1'/>
      <IconContext.Provider value={{ color: "#41BCC3", size: "1.8rem"}}><span className='socialicons'><IoLogoLinkedin/>  <IoIosCloud/></span></IconContext.Provider>
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
      <div className="circle_call"><IoIosCheckmarkCircle size="3rem" color="#41BCC3"/></div>
      <div className="menus">
        {/* Modal Buttons */}
      <IconContext.Provider value={{size:"1rem"}}>
      <button className="modal-open" data-modal="modal1"><SiGooglemeet/></button>
      <button className="modal-open" data-modal="modal2" ><BsCalendarEvent/></button>
      <button className="modal-open" data-modal="modal3"><IoMdMail/></button>
      <button className="modal-open" data-modal="modal4"><MdSms/></button>
      </IconContext.Provider>
      </div>
    </div>

    {/* Modals */}
     {/* The Modal 1 */}
    <div className="modal" id="modal1">
      <div className="modal-content">
        <div className="modal-header">Modal 1 <button className="icon modal-close"><i className="material-icons"><MdOutlineCancel size="1.5rem" color="#1a73e8"/></i></button></div>
        <div className="modal-body">Model1..................</div>
        <div className="modal-footer"><button className="link modal-close">Close Modal</button></div>
      </div>
    </div>
     {/* The Modal 2 */}
    <div className="modal" id="modal2">
      <div className="modal-content">
        <div className="modal-header">Modal 2 <button className="icon modal-close"><i className="material-icons"><MdOutlineCancel size="1.5rem" color="#1a73e8"/></i></button></div>
        <div className="modal-body">Model2..................</div>
        <div className="modal-footer"><button className="link modal-close">Close Modal</button></div>
      </div>
    </div>
     {/* The Modal 3 */}
    <div className="modal" id="modal3">
      <div className="modal-content">
        <div className="modal-header">Modal 3 <button className="icon modal-close"><i className="material-icons"><MdOutlineCancel size="1.5rem" color="#1a73e8"/></i></button></div>
        <div className="modal-body">Model3..................</div>
        <div className="modal-footer"><button className="link modal-close">Close Modal</button></div>
      </div>
    </div>
     {/* The Modal 4 */}
    <div className="modal" id="modal4">
      <div className="modal-content">
        <div className="modal-header">Modal 4 <button className="icon modal-close"><i className="material-icons"><MdOutlineCancel size="1.5rem" color="#1a73e8"/></i></button></div>
        <div className="modal-body">Model4..................</div>
        <div className="modal-footer"><button className="link modal-close">Close Modal</button></div>
      </div>
    </div>

  </div>
  )
}
