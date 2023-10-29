import { Link } from "react-router-dom";
import "../styles/NavHeader.scss";

export const NavHeader = () => {
  return (
    <header className="nav-header">
      <div className="nav-content">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/germany">Germany</Link>
        </div>
        <div className="nav-item">
          <Link to="/cases">Cases</Link>
        </div>
        <div className="nav-item">
          <Link to="/deaths">Deaths</Link>
        </div>
      </div>
    </header>
  );
};
