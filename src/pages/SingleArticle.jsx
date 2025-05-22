import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticleById(article_id).then((articleFromAPI) => {
      setSingleArticle(articleFromAPI);
    });
  }, [article_id]);
  const handleCLick = () => {
    navigate(`/articles/${article_id}/comments`);
  };
  return (
    <>
      <h3>Title: {singleArticle.title}</h3>
      <p>Topic: {singleArticle.topic}</p>
      <p>Author: {singleArticle.author}</p>
      <p>Created at: {singleArticle.created_at}</p>
      <p>Votes: {singleArticle.votes}</p>
      <p>Article Img:</p>
      <img className="card-image" src={singleArticle.article_img_url}></img>
      <p>Comment Count: {singleArticle.comment_count}</p>
      <button onClick={handleCLick}>View Comments</button>
    </>
  );
};
export default SingleArticle;
