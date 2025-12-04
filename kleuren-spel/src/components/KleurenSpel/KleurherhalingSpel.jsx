import "../../css/KleurenSpel.css";
import { useState, useEffect } from "react";
import { ReactComponent as Restart} from "../../ui/restart.svg";

const COLORS = [
  { name: "Rood", color: "#FB2C37" },
  { name: "Oranje", color: "#FF6900" },
  { name: "Geel", color: "#F0B200" },
  { name: "Groen", color: "#00C951" },
  { name: "Blauw", color: "#00A6F5" },
  { name: "Paars", color: "#8E51FF" },
  { name: "Roze", color: "#F7339A" },
  { name: "Lichtblauw", color: "#00E0FF" },
];

function KleurherhalingSpel() {
  const [sequence, setSequence] = useState([]);

  const [playerIndex, setPlayerIndex] = useState(0);
  const [activeColor, setActiveColor] = useState("");

  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [highscore, setHighscore] = useState(() => {
    return Number(localStorage.getItem("highscore")) || 0;
  });

  function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)].name;
  }

  function startGame() {
    setSequence([getRandomColor()]);
    setScore(0);
    setRound(1);
    setPlayerIndex(0);
    setIsPlaying(true);
    setGameOver(false);
    setIsShowing(true);
  }

  // Laat de kleuren zien
  useEffect(() => {
    if (!isShowing) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < sequence.length) {
        setActiveColor(sequence[i]);
        setTimeout(() => setActiveColor(""), 500);
        i++;
      } else {
        clearInterval(timer);
        setIsShowing(false);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [isShowing, sequence]);

  function handleClick(colorName) {
    if (!isPlaying || isShowing) return;

    setActiveColor(colorName);
    setTimeout(() => setActiveColor(""), 200);

    if (colorName === sequence[playerIndex]) {
      if (playerIndex === sequence.length - 1) {
        setScore(score + sequence.length);
        setRound(round + 1);
        setPlayerIndex(0);
        setSequence([...sequence, getRandomColor()]);
        setIsShowing(true);
      } else {
        setPlayerIndex(playerIndex + 1);
      }
    } else {
      setGameOver(true);
      setIsPlaying(false);
      if (score > highscore) {
        setHighscore(score);
        localStorage.setItem("highscore", score);
      }
    }
  }

    const getStatusText = () => {
    if (gameOver) return <p style={{ color: "#FF0000" }}>Gameover.. noobie, je score: {score}</p>;
    if (!isPlaying) return <p>Start</p>;
    if (isShowing) return <p>Kijk</p>;
    if (isPlaying) return <p>Druk</p>;
  };

  return (
    <div className="spel-container">
      <div className="spel-info">
        <div className="scorebord">
          <span>Ronde </span>
          <span>{round}</span>
        </div>
        <div className="scorebord">
          <span>Score </span>
          <span>{score}</span>
        </div>
        <div className="scorebord">
          <span>Highscore </span>
          <span>{highscore}</span>
        </div>
      </div>

      <div>
        {getStatusText()}
      </div>

      <div className="kleuren-grid">
        {COLORS.map((item) => (
          <button
            key={item.name}
            className={`kleur-btn ${activeColor === item.name ? "actief" : ""}`}
            style={{ backgroundColor: item.color }}
            onClick={() => handleClick(item.name)}
            aria-label={item.name} // <-- Linter zeurt
          />
        ))}
      </div>

      {!isPlaying && (
        <button onClick={startGame} className="btn start-btn">
          {gameOver ? <Restart /> : "Start Spel"}
        </button>
      )}
    </div>
  );
}

export default KleurherhalingSpel;
