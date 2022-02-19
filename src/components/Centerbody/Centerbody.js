import React from 'react'
import "./Centerbody.css"

// Icons Specific
import { IconContext } from "react-icons";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {MdInsertDriveFile} from "react-icons/md";
import {BiTaskX} from "react-icons/bi";

export default function Centerbody() {
  return (
    <div className="centerbody">
      <div className="workshopBox">
        <h3 className="textWorkshop fsh3">Workspace</h3>
        <div className='iconbox'>
          <IconContext.Provider value={{ size: "1.5rem", color: "#41BCC3"}}>
          <BsFillPersonLinesFill/>
          <MdInsertDriveFile/>
          </IconContext.Provider>
        </div>
      </div>
      <div className="emptyWorkspace">
        <div className="emptyWorkspaceIcons">
        <IconContext.Provider value={{ size: "12rem"}}>
        <span className='notePad1'><BiTaskX/></span>
        
        </IconContext.Provider>
        </div>
        <p className='fs4'><b>Your workspace is empty!</b></p>
        <p className='fs1'>To add a tab, click on any option on your bottom left</p>
      </div>
    </div>
  )
}
