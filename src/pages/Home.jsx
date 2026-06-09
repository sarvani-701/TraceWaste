import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>♻ TraceWaste</h1>

        <p>
          Smart E-Waste Disposal with rewards & tracking system.
          Dispose responsibly and earn credits.
        </p>

        <div className="buttons">
          <button onClick={() => navigate("/process")}>
            Start Processing
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}