import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anushka from "./pages/Anushka";
import Jordan from "./pages/Jordan";
import NoPage from "./pages/NoPage";
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/anushka" element={<Anushka />} />
          <Route path="/jordan" element={<Jordan />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
