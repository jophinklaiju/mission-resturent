import React from 'react';

const OrderPlacementPage = () => {
  const pageStyle = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={pageStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src="background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={formStyle}>
        <h1>Place Your Order</h1>
        <form>
          <label htmlFor="product">Product:</label>
          <input type="text" id="product" name="product" />

          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" />

          <label htmlFor="address">Shipping Address:</label>
          <textarea id="address" name="address"></textarea>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPlacementPage;
