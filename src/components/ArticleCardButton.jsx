import { useNavigate } from "react-router-dom";

const ArticleCardButton = ({ art_id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/articles/${art_id}`);
  };

  return <button onClick={handleClick}>Read More</button>;
};

export default ArticleCardButton;
