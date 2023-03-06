import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tw-elements";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Brands from "./components/brands/Brands";
import ReviewForm from "./components/reviewPage/ReviewForm";
import Policy from "./components/policy/Policy";
import LogHome from "./components/logged/LogHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/writeReview" element={<ReviewForm />}></Route>
        <Route path="/privacyPolicy" element={<Policy />}></Route>
        <Route path="/loggedIn" element={<LogHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
