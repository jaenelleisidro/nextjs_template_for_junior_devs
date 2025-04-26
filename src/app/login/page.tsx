'use client';

import { useState } from "react";
import api from "../common/Api";
import simpleFetch from "../common/SimpleFetch";

export default function Login() {

  const [email, setEmail] = useState("fan");
  const [password, setPassword] = useState("password");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("rendering..", isLoggedIn);
  const logIn = async () => {

    try {

      const res = await simpleFetch('auth/login',{method:'POST', body:{ username: email, password }});

      const accessToken = res?.data?.accessToken;

      if (!accessToken) { throw Error('login failed') }

      alert('login success!');
      localStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
    } catch (e) {
      alert("login failed!");
    }
  };

  const logOut = () => {
    localStorage.removeItem('accessToken');
    setEmail('')
    setPassword('')
    setIsLoggedIn(false);
  }


  return (
    <div className="fillparent centercontent">
      <div style={{ height: 200, width: 300, background: "skyblue", fontSize: 12 }}>
        {isLoggedIn
          ?
          <h1>Welcome {email} !<br />
            <input type="button" defaultValue="Logout" onClick={logOut} />
          </h1>
          :
          <><h1>Login to your account</h1>
            <form style={{ marginTop: 30 }}>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <br />
              <input type="button" defaultValue="Sign In" onClick={logIn} />
              <br />
            </form>
          </>
        }
      </div>
    </div>
  );
}