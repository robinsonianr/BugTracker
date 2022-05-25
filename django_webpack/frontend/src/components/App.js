import React from "react";
import reactlogo from '../../assets/reactlogo.png';
import djangologo from '../../assets/djangologo.png';
import '../App.css';
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Issues from "./Issues";
import { render } from "react-dom";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"



export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/issues" element={<Issues />} />
			</Routes>
		</Router>
	)
}


// 			<div className='App'>
// 				<HomePage />
// 				{/* <header className='App-header'>
// 						<img src={djangologo} className='django-logo' alt='django' />
// 						<img src={reactlogo} className='App-logo' alt='react' />
// 					</header> */}
// 			</div>




const appDiv = document.getElementById("app");
render(<App />, appDiv)
