import { useNavigate } from "react-router-dom";
import "../component.css";

export function home() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h2>Home</h2>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
}
