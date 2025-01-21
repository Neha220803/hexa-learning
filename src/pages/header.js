import React from 'react';
import headerbg from '../images/header-bg.png'; // Ensure this path is correct

const HeaderPage = () => {
  return (
    <section>
    <div 
      style={{
        position: 'relative',
        height: '100vh', // Full viewport height
        overflow: 'hidden', // Prevents overflow of the image
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Optional text shadow
      }}
    >
      {/* Image rendered as a background */}
      <img 
        src={headerbg} 
        alt="Background" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the entire container
          zIndex: -1, // Places the image behind the content
        }}
      />
      <h1>Welcome to Header Page</h1>
    </div>
    </section>
  );
};

export default HeaderPage;
