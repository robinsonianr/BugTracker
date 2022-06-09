import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import "./navbar.scss"

export default function Navbar() {
  

  return (
    <div className="navbar">
      <div className="wrapper">
       <div className="search">
         <input type="text" placeholder="Search..." />
         <SearchIcon/>
       </div>
       <div className="items">
         <div className="item">
           <LanguageIcon/>
           English
         </div>
         <div className="item">
           <DashboardOutlinedIcon/>
         </div>
         <div className="item">
           <NotificationsNoneIcon/>
           <div className="counter">1</div>
         </div>
         <div className="item">
            <Button variant="contained" style={{backgroundColor:"gold"}}>Create Issues</Button>
         </div>
       </div>
      </div>
    </div>
  );
}
