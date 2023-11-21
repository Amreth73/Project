import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import SignInSide from '../component/login';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Spin from './spin';
const Home = () => {

  const c1 = useRef();
  const c2 = useRef();
  const pp = useRef();
  const cp = useRef();
  const un=useRef();
  const em=useRef();
  const navigate = useNavigate();
  const handleSign=()=>{
   navigate("/final");
  // <Spin />
  }

  const fun = () => {
    if (c1.current.checked) {
      pp.current.type = "text";
    } else {
      pp.current.type = "password";
    }
  };

  const fun1 = () => {
    if (c2.current.checked) {
      cp.current.type = "text";
    } else {
      cp.current.type = "password";
    }
  };

  const ch = (e) => {
    e.preventDefault();
    if(un.current.value==="")
   {
       alert("Enter the User Name.")
   }
  else if(em.current.value==="")
    {
        alert("Enter the Email.")
    }
    else if (pp.current.value !== cp.current.value) {
      alert("Password must be the same");
    }
    else if(pp.current.value===""||cp.current.value==="")
    {
      alert("Enter the password");
    }
    else if(em.current.value!=="" && un.current.value!=="" && pp.current.value!=="" && cp.current.value!=="")
    {
        navigate("/hhome");
    }
  };

 

  return (
    <div id="main">
      
      <form>
        <Avatar id="img" src="/broken-image.jpg" />
        <div id="dd">
          <input id="u" type="text" placeholder="User name*" ref={un}  />
          {/* <input id="u" type="text" placeholder="User name*" required /> */}
        </div>
        <div id="dd1">
          <input id="e" type="email" placeholder="Email*" ref={em}  />
          <br />
        </div>

        <div id="pass">
          <input type="password" placeholder="Password*" autoComplete="off" id="pp" ref={pp}  />
          <input onClick={fun} type="checkbox" id="p1" className="check" check="false" ref={c1} />
        </div>
        <div id="pass1">
          <input type="password" placeholder="Confirm Password*"  autoComplete="off"id="cp" ref={cp}  />
          <input onClick={fun1} type="checkbox" id="p2" className="check"  ref={c2} />
        </div>

        <button onClick={ch} id="b1">
          Sign In
        </button>
        <button id="b2" onClick={handleSign}>
          Already have an account
        </button>
      </form>
    </div>
  );
};

export default Home;
