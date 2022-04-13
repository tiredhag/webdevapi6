import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { fetchJSON } from "./http";
import { useLoader } from "./useLoader";

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
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("api/login")
  );

  const user = data;

  if (loading) {
    return <div>Loading...Have patience jfc</div>;
  }

  if (error) {
    return (
      <div style={{ border: "1px solid red", background: "Pink" }}>
        An error has occurred, its not my fault kekw. Status: {error.toString()}
      </div>
    );
  }

  return (
    <div>
      <h1>Movie App</h1>
      {error && (
        <div>
          An error has occurred, its not my fault kekw. Status:{" "}
          {error.toString()}
        </div>
      )}
      {user ? (
        <div>
          {user.fullName} ({user.username}
        </div>
      ) : (
        <LoginLinks />
      )}
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
