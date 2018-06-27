import React from 'react';
import { Link } from 'react-router-dom';
import snicker from "../assets/images/snickerrr.png";

function Error404(){
  return (
    <div>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      <img src={snicker}/>
    </div>
  );
}

export default Error404;
