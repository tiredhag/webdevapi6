import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Movie App</h1>
      <div>
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
        <br />
        <div>
          <Link to={"/register"}>Register new user</Link>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return <h1>Hello you dumbfuck, this is the login page</h1>;
}

function Application(props) {
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
