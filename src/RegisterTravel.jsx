import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonCancel } from "./Components";



function RegisterTravel() {
  const rows = 4;
  const cols = 10;
  const seatPrice = 150;
  const totalSeats = rows * cols;

  const [occupiedSeats, setOccupiedSeats] = useState(new Set());
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  useEffect(() => {
    const quantity = Math.floor(Math.random() * 10) + 5;
    const occupied = new Set();

    while (occupied.size < quantity) {
      const index = Math.floor(Math.random() * totalSeats);
      occupied.add(index);
    }

    setOccupiedSeats(occupied);
  }, [totalSeats]);

  const toggleSeat = (index) => {
    if (occupiedSeats.has(index)) return;

    setSelectedSeats((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  const getSeatClass = (index) => {
    if (occupiedSeats.has(index)) return "seat seat-occupied";
    if (selectedSeats.has(index)) return "seat seat-selected";
    return "seat";
  };

  const subtotal = selectedSeats.size * seatPrice;

  return (
    <>
      <div className="homepage-container">
        <br />
        <h2>Gerenciamento de assento</h2>

        <div className="bus-container">
          <div className="passenger-area">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="seat-row"
                style={{
                  marginTop:
                    rowIndex === 0
                      ? "0rem"
                      : rowIndex % 2 === 0
                      ? "1.25rem"
                      : "0rem",
                }}
              >
                {Array.from({ length: cols }).map((_, colIndex) => {
                  const index = rowIndex * cols + colIndex;
                  return (
                    <div
                      key={colIndex}
                      className={getSeatClass(index)}
                      onClick={() => toggleSeat(index)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="bus-info">
          <div className="bus-info-header">
            <div className="legend-container">
              <div className="legend-item">
                <div className="legend-free" /> Livre
              </div>
              <div className="legend-item">
                <div className="legend-occupied" /> Ocupado
              </div>
              <div className="legend-item">
                <div className="legend-selected" /> Selecionado
              </div>
            </div>
          </div>
          <div className="counter">
            <p>
              Assentos selecionados:
              <span className="counter-value"> {selectedSeats.size} </span>
            </p>
            <p>
              Preço por assento:
              <span className="counter-value"> R$ {seatPrice} </span>
            </p>
            <p>
              Subtotal:
              <span className="counter-value">
                {selectedSeats.size} x {seatPrice} = R$ {subtotal}
              </span>
            </p>
          </div>
          <div className="footer-register-buspage">
            <ButtonCancel onClick={() => window.history.back()}>
              Cancel
            </ButtonCancel>
            <Link to="/PaymentConfirm">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterTravel;
