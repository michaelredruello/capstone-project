import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ loginProfile }) => {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
    id: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        loginProfile();
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container signup-container">
      <h1>Login!</h1>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
