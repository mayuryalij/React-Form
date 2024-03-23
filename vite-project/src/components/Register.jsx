import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", { username, password });
      console.log("User registered successfully");
      alert("User registered successfully")
    } catch (error) {
      console.error("Error registering user:", error.response.data.message);
    }
  };

  return (
    <div className="register-container">
      <div className="container custom-div d-flex justify-content-center ">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2>Register</h2>
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="bg-primary text-white" type="submit">
              Register
            </button>
          </div>
          <div>
            <span>Already registered?</span>
            <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
