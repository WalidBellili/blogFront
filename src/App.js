import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Article from "./pages/Article";
import CreateArticle from "./pages/CreateArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/create" element={<CreateArticle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
