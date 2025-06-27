import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Deals from "./pages/Deals/Deals";
import GamePage from "./pages/GamePage/GamePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStores } from "./store/storesSlice";
import { AppDispatch } from "./app/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/game/:gameID" element={<GamePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
