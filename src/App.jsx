import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import GameResults from "./components/GameResults";
import PopupModal from "./components/PopupModal";
import "./index.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [showAllGames, setShowAllGames] = useState(false);

  // Background animation emojis
  const backgroundEmojis = ["👾", "🕹️", "🎮", "🎲", "🏆", "💫", "⭐", "🌟"];
  
  useEffect(() => {
    // Create floating emojis
    const createEmoji = () => {
      const emoji = document.createElement("span");
      emoji.className = "floating-emoji";
      emoji.textContent = backgroundEmojis[Math.floor(Math.random() * backgroundEmojis.length)];
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
      emoji.style.opacity = Math.random() * 0.5 + 0.3;
      emoji.style.fontSize = Math.random() * 20 + 15 + "px";
      
      document.body.appendChild(emoji);
      
      setTimeout(() => {
        emoji.remove();
      }, 5000);
    };

    const emojiInterval = setInterval(createEmoji, 300);
    return () => clearInterval(emojiInterval);
  }, []);

  // Fetch games from JSON
  useEffect(() => {
    fetch("/games/games.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return (
    <div className="app" style={{
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          .floating-emoji {
            position: fixed;
            animation: floatUp linear forwards;
            z-index: -1;
          }
          
          @keyframes floatUp {
            0% {
              transform: translateY(-100vh) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
            }
          }

          .glow-left {
            position: fixed;
            left: 0;
            top: 0;
            width: 150px;
            height: 100vh;
            background: linear-gradient(90deg, rgba(255, 165, 0, 0.2), transparent);
            animation: glowPulse 2s infinite alternate;
            z-index: -1;
          }

          .glow-right {
            position: fixed;
            right: 0;
            top: 0;
            width: 150px;
            height: 100vh;
            background: linear-gradient(270deg, rgba(255, 165, 0, 0.2), transparent);
            animation: glowPulse 2s infinite alternate;
            z-index: -1;
          }

          @keyframes glowPulse {
            from {
              opacity: 0.3;
            }
            to {
              opacity: 0.8;
            }
          }
        `}
      </style>
      <div className="glow-left"></div>
      <div className="glow-right"></div>
      <PopupModal isOpen={showModal} setIsOpen={setShowModal} />
      <h1 className="title">NostalJoy 👾</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <button 
        onClick={() => setShowAllGames(!showAllGames)}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#ffa500',
          color: '#121212',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          margin: '20px 0',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }}
      >
        {showAllGames ? 'Hide All Games' : 'Show All Games'} 🎮
      </button>
      {searchTerm && <GameResults games={games} searchTerm={searchTerm} />}
      {showAllGames && !searchTerm && <GameResults games={games} searchTerm="" />}
      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        borderTop: '2px solid #ffa500',
        background: '#1e1e1e'
      }}>
        <p style={{
          fontSize: '1.2rem',
          background: 'linear-gradient(45deg, #4285f4, #ea4335, #fbbc05, #34a853)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '10px'
        }}>Made with 💖 for Retro Gamers</p>
        <p style={{
          color: '#fff',
          fontSize: '0.9rem'
        }}>© 2025 NostalJoy - Bringing back the classics!</p>
      </footer>
    </div>
  );
};

export default App;
