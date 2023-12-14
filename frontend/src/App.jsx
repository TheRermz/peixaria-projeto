import "./App.css";

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//hooks
import { useAuth } from "./hooks/useAuth";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Navbar from "./components/Navbar";
import AdminProfile from "./pages/AdminProfile/AdminProfile";

const App = () => {
  const { auth, loading } = useAuth();
  if (loading) return <div>Carregando...</div>;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!auth ? <Register /> : <Navigate to="/" />}
          />
          <Route path="/profile/:id" element={<AdminProfile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
