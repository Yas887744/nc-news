import { useState } from "react";
import { patchArticleVotes } from "../api";

const ChangeVoteButtonDec = ({ art_id, votes, setVotes }) => {
  const handleClick = () => {
    patchArticleVotes(art_id, -1).then((updatedArticle) => {
      setVotes(updatedArticle.votes);
    });
  };
  return (
    <>
      <button onClick={handleClick}>Vote -1</button>
    </>
  );
};
export default ChangeVoteButtonDec;
