import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContext = createContext();
const ProductsContext = createContext();
const RegisterContext = createContext();

const blogUrl = "http://localhost:8080/blog";
const productsUrl = "https://66559b2c3c1d3b60293a46d7.mockapi.io/products";

const AppProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [ticket, setTicket] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addCart = (product) => {
    let updatedCart;
    const idx = cart.findIndex(
      (item) => item.id === product.id && item.name === product.name
    );
    if (idx >= 0) {
      updatedCart = cart.map((item, index) => {
        if (index === idx) {
          return { ...item, count: +item.count + +product.count };
        }
        return item;
      });
    } else {
      updatedCart = [...cart, product];
    }

    setCart(updatedCart);
    localStorage.setItem("pay", JSON.stringify(updatedCart));
  };

  const addToFavorites = (product) => {
    let updatedFavorites;
    const idx = favorites.findIndex(
      (item) => item.id === product.id && item.name === product.name
    );
    if (idx >= 0) {
      updatedFavorites = [...favorites];
    } else {
      updatedFavorites = [...favorites, product];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("pay"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const removeCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("pay", JSON.stringify(updatedCart));
  };

  const removeFav = (id) => {
    const updatedFav = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));
  };

  const updateCart = (id, count) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, count } : item
      );
      localStorage.setItem("pay", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const fetchData = async () => {
    const response = await fetch(blogUrl);
    const data = await response.json();
    setBlog(data);
  };

  const fetchProducts = async () => {
    const response = await fetch(productsUrl);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // Register
  const RegisterUser = async (data, navigate) => {
    try {
      const { data: users } = await axios.get("http://localhost:8080/users");

      const isUsernameTaken = users.some(
        (user) => user.username === data.username
      );
      const isEmailTaken = users.some((user) => user.email === data.email);

      if (isUsernameTaken) {
        toast.error("Username already exists");
        return;
      }

      if (isEmailTaken) {
        toast.error("Email already exists");
        return;
      }

      const response = await axios.post("http://localhost:8080/users", {
        ...data,
        orders: [],
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pay");
    localStorage.removeItem("favorites");
    setUser(null);
    setCart([]);
    setTicket([]);
    setFavorites([]);
  };

  const loginUser = async (data, navigate) => {
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      if (response.status === 200) {
        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/");
        toast.success("Login successful!");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        user,
        setUser,
        logOut,
        RegisterUser,
        loginUser,
        addCart,
        cart,
        setCart,
        updateCart,
        removeCart,
        ticket,
        setTicket,
        addToFavorites,
        favorites,
        removeFav,
      }}
    >
      <AppContext.Provider value={{ blog, setBlog }}>
        <ProductsContext.Provider value={{ products, setProducts }}>
          {children}
        </ProductsContext.Provider>
      </AppContext.Provider>
    </RegisterContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export const useProductsContext = () => useContext(ProductsContext);
export const useRegisterContext = () => useContext(RegisterContext);

export { AppProvider };
