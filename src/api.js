import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://news-be-project-yasin.onrender.com/api",
});
export const fetchArticles = () => {
  return ncNewsAPI.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
