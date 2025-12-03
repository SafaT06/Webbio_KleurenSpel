import "../../css/General.css";
import { ReactComponent as ArrowDown } from "../../ui/arrow_down.svg";
import { useNavigate } from "react-router-dom";

function StartScherm() {
  const navigate = useNavigate();

  return (
    <div className="start-scherm">
      <h2>Welkom bij het Kleurenspel 🎨</h2>
      <ArrowDown />
      <div className="game-buttons">
        <button className="btn" onClick={() => navigate("/kleurherhaling")}>
          Kleurherhaling
        </button>
        <button className="btn" onClick={() => navigate("/reactietijd")}>
          Reactietijd
        </button>
      </div>
    </div>
  );
}

export default StartScherm;
