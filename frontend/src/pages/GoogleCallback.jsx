// src/pages/GoogleCallback.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");
    const picture = params.get("picture");

    if (token && email) {
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("user_name", name);
      localStorage.setItem("user_email", email);
      localStorage.setItem("user_picture", picture);
      navigate("/dashboard"); // ou qualquer rota após login
    } else {
      navigate("/login"); // se falhar, volta pro login
    }
  }, [location, navigate]);

  return <p className="text-center text-slate-600">Autenticando com Google...</p>;
};

export default GoogleCallback;
