import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "@/assets/utfpr-logo.png";
import AuthService from "@/service/ConfiguracaoService";

export function NavBar() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    AuthService.logout();
    // window.location.href = "/login";
    navigate("/login");
  };

  return (
    <div className="background shadow-sm" style={{backgroundColor: "#ba9c70"}}>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand justify-content-center">
          <Link to={"/home"}> VESS </Link>
        </nav>
      </div>
    </div>
  );
}
