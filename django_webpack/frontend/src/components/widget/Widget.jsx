import "./widget.scss"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Widget() {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">Users</span>
            <span className="counter"><PersonOutlineIcon className="icon"/>1000+</span>
            <span className="users">See all users</span>
        </div>
        <div className="middle">
            <BugReportIcon className="icon" style={{backgroundColor: "rgba(255, 244, 145, 0.5)", color: "gold"}}/>
        </div>
        <div className="right">
          <div className="tasks">
            <TaskAltIcon style={{color: "gold" }}/>
            <span>Current Issues: 5</span>
          </div>
        </div>
    </div>
  )
}
