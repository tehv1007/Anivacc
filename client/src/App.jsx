import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewsByType from "./pages/News/NewsByType";
import NewsArticle from "./pages/News/NewsArticle";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/:categoryId" element={<Home />} />
        <Route path="/products/:productId" element={<Home />} />
        <Route path="/solutions" element={<Home />} />
        <Route path="/solutions/:solutionId" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/advantage" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/guide" element={<Home />} />
        <Route path="/posts" element={<News />} />
        <Route path="/posts/:postId" element={<NewsArticle />} />
        <Route path="/posts/category/:categoryType" element={<NewsByType />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
