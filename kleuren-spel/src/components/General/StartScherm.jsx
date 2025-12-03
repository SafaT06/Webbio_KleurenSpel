import "../../css/General.css";

import { useNavigate } from "react-router-dom";

function StartScherm() {
const navigate = useNavigate();

  return <p>Startscherm
    <button onClick={() => navigate("/kleurherhaling")}>Start Kleurherhaling</button>
    <button onClick={() => navigate("/reactietijd")}>Start Reactietijd</button>
  </p>;
}

export default StartScherm;
