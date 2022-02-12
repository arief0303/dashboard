import React from 'react';
import Button from "react-bootstrap/Button";

function Home (){
	return <div>
    <h1>Dashboard</h1>
    <p>Login</p>
    <input type="text" id="myText" value="username"></input>
    <br/>
    <input type="text" id="myText" value="password"></input>
    <br/>
    <Button/>
  </div>
}

export default Home;