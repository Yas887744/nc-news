import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://news-be-project-yasin.onrender.com/api",
});
export const fetchArticles = () => {
  return ncNewsAPI.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
export const fetchArticleById = (id) => {
  return ncNewsAPI.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};
export const fetchCommentsByArticleId = (id) => {
  return ncNewsAPI.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
export const patchArticleVotes = (id, votes) => {
  return ncNewsAPI
    .patch(`/articles/${id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data.article;
    });
};
export const postNewComment = (articleId, postObj) => {
  return ncNewsAPI
    .post(`/articles/${articleId}/comments`, postObj)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => "invalid input");
};
