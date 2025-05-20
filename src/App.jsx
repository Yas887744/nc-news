import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";

function App() {
  const headerName = "NC News";
  return (
    <>
      <Header name={headerName} />
      <ArticleList />
    </>
  );
}

export default App;
