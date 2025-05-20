const ArticleCard = ({ article }) => {
  return (
    <li className="articlecard">
      <h3>Title: {article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Created at: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Article Img:</p>
      <img className="card-image" src={article.article_img_url}></img>
      <p>Comment Count: {article.comment_count}</p>
    </li>
  );
};
export default ArticleCard;
