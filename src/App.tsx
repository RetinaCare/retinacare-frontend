import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Predictor from "./pages/Predictor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/predictor" element={<Predictor />} />
      </Routes>
    </>
  );
}

export default App;
