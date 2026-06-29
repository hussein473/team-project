function Header({ onAuthClick }) {
  return (
    <header className="header">
      <div className="logo">🍣 Sushi Haven</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="nav-auth-btn" onClick={onAuthClick}>
              Sign in
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
