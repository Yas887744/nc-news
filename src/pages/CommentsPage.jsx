import { useState } from "react";
import Comments from "../components/Comments";
import CommentForm from "../components/CommentForm";

const CommentsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleAddCommentClick = () => {
    setShowForm(true);
    setFormSubmit(false);
  };

  return (
    <>
      <h1>Comments Page</h1>
      <div>
        {showForm ? (
          <CommentForm
            body={body}
            setBody={setBody}
            username={username}
            setUsername={setUsername}
            showForm={showForm}
            setShowForm={setShowForm}
            formSubmit={formSubmit}
            setFormSubmit={setFormSubmit}
          />
        ) : (
          <button onClick={handleAddCommentClick}>Add Comment</button>
        )}
      </div>
      <div>
        {formSubmit ? <p>Comment Added</p> : <p>Please enter a comment</p>}
      </div>

      <Comments formSubmit={formSubmit} setFormSubmit={setFormSubmit} />
    </>
  );
};

export default CommentsPage;
