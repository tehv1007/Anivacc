import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewsByType from "./pages/News/NewsByType";
import NewsArticle from "./pages/News/NewsArticle";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import RootLayout from "./components/Layout/RootLayout";
import OurAdvantage from "./pages/About/OurAdvantage";
import OurStory from "./pages/About/OurStory";
import FAQ from "./pages/Resources/FAQ";
import Guide from "./pages/Resources/Guide";
import ProductDetail from "./pages/Products/ProductDetail";
import Products from "./pages/Products/Products";
import { useState } from "react";
import Solutions from "./pages/Solutions/Solutions";
import Contact from "./pages/Contact/Contact";
import Inquiry from "./pages/Inquiry/Inquiry";
import ProductLayout from "./components/Layout/ProductLayout";
import ScrollToTop from "./components/Layout/ScrollToTop";
import SearchResult from "./pages/Products/SearchResult";

const App = () => {
  const [lang_code, setLangCode] = useState("vi");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <RootLayout
              cart={cart}
              setCart={setCart}
              setLangCode={setLangCode}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route element={<ProductLayout />}>
            <Route
              path="/search"
              element={<SearchResult lang_code={lang_code} />}
            />
            <Route
              path="/products/category/:categoryId"
              element={<Products lang_code={lang_code} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetail cart={cart} setCart={setCart} />}
            />
          </Route>
          <Route
            path="/inquiry"
            element={<Inquiry cart={cart} setCart={setCart} />}
          />
          <Route path="/:categoryId" element={<Home lang_code={lang_code} />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:solutionId" element={<Home />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/advantage" element={<OurAdvantage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/posts" element={<News lang_code={lang_code} />} />
          <Route path="/posts/:postId" element={<NewsArticle />} />
          <Route
            path="/posts/category/:categoryType"
            element={<NewsByType />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
