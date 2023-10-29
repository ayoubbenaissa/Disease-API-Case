import { Link } from "react-router-dom";

import "../styles/Home.scss";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="description">
        Welcome to <strong>Disease API Case: Covid-19 information</strong> app.{" "}
        <br />
      </div>
      <div className="endpoints">
        <Link className="link-item" to="/germany">
          Germany Info
        </Link>
        <Link className="link-item" to="/cases">
          Check all cases
        </Link>

        <Link className="link-item" to="/deaths">
          Check all deaths {`"(`}
        </Link>
      </div>
    </>
  );
};
