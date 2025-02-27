import React from "react";
import Modal from "react-modal";

const PopupModal = ({ isOpen, setIsOpen }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1e1e1e',
      border: '2px solid #ffa500',
      borderRadius: '15px',
      padding: '30px',
      maxWidth: '600px',
      width: '90%',
      color: '#ffa500'
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="modal-content">
        <h2 style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(45deg, #4285f4, #ea4335, #fbbc05, #34a853)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '20px'
        }}>Welcome to NostalJoy! 👾</h2>
        
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginBottom: '25px',
          color: '#fff'
        }}>Get all the nostalgic games at one place! Discover and play your favorite classic games from the golden era of gaming.</p>
        <h3 style={{
          fontSize: '1.4rem',
          color: '#ffa500',
          marginBottom: '15px',
          textAlign: 'center'
        }}>Want to play old games on android? a quick tutorial for you! 🕹️</h3>
        <div style={{ marginBottom: '25px' }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Retro Gaming Montage"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: '10px' }}
          ></iframe>
        </div>

        <button 
          onClick={() => setIsOpen(false)}
          style={{
            padding: '12px 30px',
            fontSize: '1.1rem',
            backgroundColor: '#ffa500',
            color: '#121212',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            ':hover': {
              backgroundColor: '#fff',
              transform: 'scale(1.05)'
            }
          }}
        >
          Get the Games! 🎮
        </button>
      </div>
    </Modal>
  );
};

export default PopupModal;
