import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Activity from './Activity/Activity';
import Task from './Task/Task';
import Progress from './Progress/Progress';

import "./Rightbar.css"

// Icons specific
import { MdFileUpload, MdStop } from "react-icons/md";
import { IoIosPause } from "react-icons/io";

export default function Rightbar() {
  return (
    <Router>
    <div className="rightBar">
      <div className="rightTop">
        <div className="saleforce">
          <MdFileUpload size="1.5rem" color='#FFFFFF'/>
          <p className='textSaleforce fs1'><b>Salesforce</b></p>
        </div>
        <div className="pauseStopIcons">
          <IoIosPause size="2rem" color='#41BCC3'/>
          <MdStop size="2rem" color='#EF525E'/>
        </div>
      </div>

      <hr className='topBottomDivision'/>

      <div className="rightBottom">
        <div className="menuBar">
          <Link to="/activity" className="menu fs1">Activity</Link>
          <Link to="/task" className="menu fs1">Task</Link>
          <Link to="/progress" className="menu fs1">Progress</Link>
        </div>
        <Switch>
          <Route path="/activity">
            <Activity/>
          </Route>
          <Route path="/task">
            <Task/>
          </Route>
          <Route path="/progress">
            <Progress/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}
