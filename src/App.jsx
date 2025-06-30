import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout, LoginLayout } from "./Components";
import Login from "./Login";
import HomePage from "./HomePage";
import ShowComponents from "./ShowComponents";
import RegisterUser from "./RegisterUser";
import RegisterUserForm from "./RegisterUserForm";
import RegisterEmployeeForm from "./RegisterEmployeeForm";
import RegisterTravel from "./RegisterTravel";
import PaymentConfirm from "./PaymentConfirm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/Login" element={<Login />} />

            <Route path="/RegisterUser" element={<RegisterUser />} />
            <Route path="/RegisterUserForm" element={<RegisterUserForm />} />

            <Route
              path="/RegisterEmployeeForm"
              element={<RegisterEmployeeForm />}
            />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/RegisterTravel" element={<RegisterTravel />} />

            <Route
              path="/PaymentConfirm"
              element={<PaymentConfirm />}
            />

            <Route path="/Components" element={<ShowComponents />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
