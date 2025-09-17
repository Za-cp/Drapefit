import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import FitQuiz from "./Components/FitQuiz";

const MyContext = createContext();

function AppWrapper() {
  const navigate = useNavigate();

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false); // <-- you declared but not using yet, fine
  const [isFitQuizOpen, setIsFitQuizOpen] = useState(false);
  const [fitQuizResult, setFitQuizResult] = useState(null);


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userNameFromStorage = localStorage.getItem("userName");
    if (token) {
      setIsLogin(true);
      setUsername(userNameFromStorage || ""); // Set username from storage
    }
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleLogin = async (userData) => {
    try {
      const response = await axios.post("/api/login", userData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.user.name);
      setIsLogin(true);
      setIsHeaderFooterShow(true);

      setUsername(response.data.user.name);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const toggleFitQuiz = () => {
    setIsFitQuizOpen(!isFitQuizOpen);
  };

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    setIsOpenProductModal,
    isOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow, // ✅ make sure this is correct
    isLogin,
    setIsLogin,
    username,
    setUsername,
    handleLogin,
    toggleFitQuiz,
    navigate,
    fitQuizResult,
    setFitQuizResult,
  };

  return (
    <MyContext.Provider value={values}>
      {isHeaderFooterShow && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<Listing />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/fitquiz" element={<FitQuiz />} />
      </Routes>
      {isHeaderFooterShow && <Footer />}
      {isOpenProductModal && <ProductModal />}
      {isFitQuizOpen && (
        <div className="fitquiz-modal">
          <div className="fitquiz-overlay" onClick={toggleFitQuiz}></div>
          <div className="fitquiz-content">
            <FitQuiz toggleFitQuiz={toggleFitQuiz} />
            <button className="close-fitquiz" onClick={toggleFitQuiz}>
              ✖
            </button>
          </div>
        </div>
      )}
    </MyContext.Provider>
  );
}

function App() {
  return <AppWrapper />;
}

export default App;
export { MyContext };
