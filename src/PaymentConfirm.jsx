import { Link } from "react-router-dom";
import { Button, ButtonCancel } from "./Components";

function PaymentConfirm() {
  return (
    <div className="homepage-container">
      <br />
      <h2>Gerenciamento de assento</h2>
      <div className="payment-card">
        <img src="../assets/qrcode.png" alt="QR Code" className="qrcode-img" />
        <p className="total-value">Total: R$ 300,00</p>
      </div>
      <br />
      <br />  
      <br />
      <div className="footer-register-buspage">
        <ButtonCancel onClick={() => window.history.back()}>
          Voltar
        </ButtonCancel>
        <Link to="/PaymentConfirm">
          <Button>Confirmar</Button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentConfirm;
