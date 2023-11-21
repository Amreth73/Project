import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Front from '../pages/front';
const Final = () => {
const logg=useRef();
  const c1 = useRef();
  const pp = useRef();
  const em=useRef();
  const navigate = useNavigate();
 

  const fun = () => {
    if (c1.current.checked) {
      pp.current.type = "text";
    } else {
      pp.current.type = "password";
    }
  };
  const ch = (e) => {
    // <Front />
    e.preventDefault();
    navigate("/hhome");

    // logg.current.style.display="flex";
  };

 

  return (
    <div id="main">
      <h2 class="ss">Login Page</h2>
      <form>
        <Avatar id="img" src="/broken-image.jpg" />
        <div id="dd1">
          <input id="e" type="email" placeholder="Email*" ref={em} required />
          <br />
        </div>

        <div id="pass">
          <input type="password" placeholder="Password*" autoComplete="off" id="pp" ref={pp} required />
          <input onClick={fun} type="checkbox" id="p1" className="check" check="false" ref={c1} />
        </div>
        

        
      </form>
        <button type="submit" onClick={ch} id="b11" ref={logg}>
          Login
        </button>
    </div>
  );
};

export default Final;


