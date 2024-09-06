import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { Button, ButtonGroup } from 'react-bootstrap';

const Navbar = () => {
  const { totalAmount } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Pizzería Mamma Mia!
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ButtonGroup className="navbar-nav">
          <Link to="/" className="nav-item">
            <Button variant="outline-light">🍕 Home</Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile" className="nav-item">
                <Button variant="outline-light">🔓 Profile</Button>
              </Link>
              <Button variant="outline-light" className="nav-item">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-item">
                <Button variant="outline-light">🔐 Login</Button>
              </Link>
              <Link to="/register" className="nav-item">
                <Button variant="outline-light">🔐 Register</Button>
              </Link>
            </>
          )}
        </ButtonGroup>
        <Link to="/cart">
          <button className="btn btn-outline-info total-button">
            🛒 Total: ${totalAmount.toLocaleString()}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
