import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Online Quiz App</h1>
      <p>Test your knowledge with our online quiz</p>

      <button onClick={() => navigate("/login")}>
        Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/signup")}>
        Signup
      </button>
    </div>
  );
}

export default Home;
