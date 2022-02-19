import React from 'react'
import Centerbody from '../Centerbody/Centerbody'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar/Rightbar'
import "./Mainbody.css"
import "../Leftbar/Leftbar.css"

export default function Mainbody() {
  return (
    <div className="contentWrapper">
        <Leftbar/>
        <Centerbody/>
        <Rightbar/>
    </div>
  )
}
