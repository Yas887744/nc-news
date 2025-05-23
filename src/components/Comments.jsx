import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";

const Comments = ({ formSubmit, setFormSubmit }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setLoading(false);
    });
  }, [formSubmit]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul id="comments-list">
        {comments.map((comment) => {
          return (
            <li className="commentcard" key={comment.comment_id}>
              <h3>Comment: {comment.body}</h3>
              <p>Votes: {comment.votes}</p>
              <p>User: {comment.author}</p>
              <p>Commented At: {comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Comments;
