import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function LoginLinks() {
  return (
    <div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
      <br />
      <div>
        <Link to={"/register"}>Register new user</Link>
      </div>
    </div>
  );
}

function FrontPage() {
  const [user, setUser] = useState();
  useEffect(async () => {
    const res = await fetch("/api/login");
    setUser(await res.json());
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      {user ? <div>{user.fullName}</div> : <LoginLinks />}
      <LoginLinks />
    </div>
  );
}

function Login() {
  return <h1>Hello you dumbfuck, this is the login page</h1>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
