import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Predictor from "./pages/Predictor";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="predictor" element={<Predictor />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
