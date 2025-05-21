import ArticleCardButton from "./ArticleCardButton";

const ArticleCard = ({ article }) => {
  return (
    <li className="articlecard">
      <h3>Title: {article.title}</h3>
      <ArticleCardButton art_id={article.article_id} />
    </li>
  );
};
export default ArticleCard;
