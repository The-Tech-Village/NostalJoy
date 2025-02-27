import React from "react";

const GameResults = ({ games, searchTerm }) => {
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="results-container" style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '20px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    }}>
      {filteredGames.length > 0 ? (
        filteredGames.map((game, index) => (
          <a key={index} href={game.link} className="game-link">
            {game.name}
          </a>
        ))
      ) : (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
};

export default GameResults;
