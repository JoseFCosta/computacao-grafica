import "./components.css";
import { Link, Outlet } from "react-router-dom";

const title = "Meu Site";

const LoginLayout = () => {
  return (
    <>
    <header className="login-header">
      <div className="header-left">
        <Link className="title" to="/">
          {title}
        </Link>
      </div>
    </header>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

export default LoginLayout