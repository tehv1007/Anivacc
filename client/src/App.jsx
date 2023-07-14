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
import SolutionPost from "./pages/Solutions/SolutionPost";

const App = () => {
  const [lang_code, setLangCode] = useState("vi");
  const [page, setPage] = useState(1);

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
              setPage={setPage}
            />
          }
        >
          <Route path="/" element={<Home lang_code={lang_code} />} />
          <Route element={<ProductLayout />}>
            <Route
              path="/search"
              element={
                <SearchResult
                  lang_code={lang_code}
                  page={page}
                  setPage={setPage}
                />
              }
            />
            <Route
              path="/products/:category/:categoryId"
              element={
                <Products lang_code={lang_code} page={page} setPage={setPage} />
              }
            />
            <Route
              path="/products/:category"
              element={
                <Products lang_code={lang_code} page={page} setPage={setPage} />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  cart={cart}
                  setCart={setCart}
                  lang_code={lang_code}
                />
              }
            />
          </Route>
          <Route
            path="/inquiry"
            element={<Inquiry cart={cart} setCart={setCart} />}
          />
          <Route
            path="/solutions"
            element={<Solutions lang_code={lang_code} />}
          />
          <Route
            path="/solutions/:solutionId"
            element={<Solutions lang_code={lang_code} />}
          />
          <Route path="/solution/:postId" element={<SolutionPost />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/advantage" element={<OurAdvantage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/posts" element={<News lang_code={lang_code} />} />
          <Route
            path="/posts/:postId"
            element={<NewsArticle lang_code={lang_code} />}
          />
          <Route
            path="/posts/category/:categoryType"
            element={<NewsByType lang_code={lang_code} />}
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
