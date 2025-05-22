import { Link } from "react-router-dom";
const Header = ({ name }) => {
  return (
    <header>
      <h1>NC News</h1>
      <Link to="/">Home</Link>
      <Link to="/articles">All Articles</Link>
    </header>
  );
};
export default Header;
