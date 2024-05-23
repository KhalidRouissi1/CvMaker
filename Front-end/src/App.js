import "./App.css";
import Login from "./pages/Login";
import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import PdfViewer from "./components/pdfGenerator/PdfViewer";
import TemplatesPage from "./pages/TemplatesPage";
import PopupDelete from "./components/PoppupDelete";
import ActivateAccount from "./components/ActivateAccount";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/activate-account" element={<ActivateAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pdfViewer" element={<PdfViewer />} />
        <Route path="/home" element={<TemplatesPage />} />
        <Route path="/doc" element={<PopupDelete />} />
      </Routes>
    </div>
  );
}

export default App;
