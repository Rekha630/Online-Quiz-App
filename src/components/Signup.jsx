import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email && password) {
      alert("Signup successful");
      navigate("/");
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSignup}>Signup</button>
      <br /><br />

      <button onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
}

export default Signup;
