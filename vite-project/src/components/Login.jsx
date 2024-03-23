import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { username, password });
      console.log("Login successful");
      console.log("Token:", response.data.token);
      alert("Login successful")
    } catch (error) {
      console.error("Error logging in:", error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="container custom-div d-flex justify-content-center  ">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2>Login</h2>
          </div>
          <div className="mb-3 ">
            <input
              type="email"
              name="Email"
              placeholder="enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="passward"
              name="Passward"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className=" text-center ">
            <button className="bg-primary text-white" type="submit">
              Login{" "}
            </button>
          </div>
          <div>
            <span>Not registered?</span>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
