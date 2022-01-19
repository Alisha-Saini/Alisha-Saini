import './App.css';
import React, { Component,useState } from 'react';

const App =()=> {
	let time = new Date().toLocaleTimeString();
	const [ctime,settime] = useState(time);
	const updatetime=()=>{
		time = new Date().toLocaleTimeString();
		settime(time);
	}
	setInterval(updatetime,1000);
  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
}

export default App;
