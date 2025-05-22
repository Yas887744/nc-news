import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import AllArticles from "./pages/AllArticles";
import CommentsPage from "./pages/CommentsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<AllArticles />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<CommentsPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
