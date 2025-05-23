import { useParams } from "react-router-dom";
import { postNewComment } from "../api";
import { useState } from "react";

const CommentForm = ({
  body,
  setBody,
  username,
  setUsername,
  showForm,
  setShowForm,
  formSubmit,
  setFormSubmit,
}) => {
  const { article_id } = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    const postBody = { username, body };
    postNewComment(article_id, postBody).then(() => {
      setFormSubmit(true);
      setShowForm(false);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Username:
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Enter Comment:{" "}
          <input
            type="text"
            id="body"
            value={body}
            name="body"
            onChange={(event) => setBody(event.target.value)}
          />
        </label>
        <button type="Submit">Post Comment</button>
      </form>
    </>
  );
};
export default CommentForm;
