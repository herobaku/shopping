// src/app.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/Header";
import RouterMain from "./routerMain/RouterMain";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <RouterMain />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
