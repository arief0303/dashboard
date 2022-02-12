import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function Home (){
	return <div>
    <h1>Dashboard</h1>
    <p>Login</p>
    <input type="text" id="myText" value="username"></input>
    <br/>
    <input type="text" id="myText" value="password"></input>
    <br/>
    <Link to="/Contact">
    <Button variant="outline-primary">Login</Button>
    </Link>
  </div>
}

export default Home;