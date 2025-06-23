import { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import "./components.css";

const menuItems = [
  { label: "Início", path: "/" },
  { label: "Login", path: "/Login" },
  { label: "Cadastro", path: "/RegisterUser" },
  { label: "Cadastro de usuario", path: "/RegisterUserForm" },
  { label: "Cadastro de funcionário", path: "/RegisterEmployeeForm" },
  { label: "Cadastro de viagem", path: "/RegisterTravel" },
  { label: "PaymentConfirm", path: "/PaymentConfirm" },
  { label: "Componentes", path: "/Components" },
];

const title = "Meu Site";
const username = "Usuário";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="hamburger-icon" onClick={() => setIsMenuOpen(true)}>
            ☰
          </div>
          <Link className="title" to="/">
            {title}
          </Link>
        </div>
        <div className="header-right">Bem-vindo, {username}</div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="side-menu">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="menu-item"
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </>
      )}

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;