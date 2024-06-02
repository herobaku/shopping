import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import NotFound from "@components/notFound/NotFound";
import Faq from "../pages/faq/Faq";
import BlogPages from "../pages/blog/BlogPages";
import Shop from "../pages/shop/Shop";
import Post from "@components/blogPage/posts/post/Post";
import ShopDetail from "@components/productsPage/shopDetail/ShopDetail";
import WishList from "@components/wishlist/WishList";
import Compare from "@components/compare/Compare";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ShoppingCart from "../pages/shoppingCart/ShoppingCart";
import Checkout from "../pages/checkout/Checkout";
import Dashboard from "../pages/dashboard/Dashboard";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:category" element={<Shop />} />
      <Route path="/product/:id" element={<ShopDetail />} />
      <Route path="/blog" element={<BlogPages />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterMain;
