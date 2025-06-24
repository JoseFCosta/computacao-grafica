import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ButtonCancel({ onClick, children }) {
  return (
    <button className="button-cancel" onClick={onClick}>
      {children}
    </button>
  );
}

function Button({ children }) {
  return <button className="button-confirm">{children}</button>;
}

function RegisterTravel() {
  const rowsPerGroup = 2;
  const seatsPerRow = 5; // quantidade de assentos por linha
  const totalGroups = 2;
  const pricePerSeat = 150;

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const initialSeats = [];
    for (let group = 0; group < totalGroups; group++) {
      for (let row = 0; row < rowsPerGroup; row++) {
        const rowSeats = [];
        for (let seat = 0; seat < seatsPerRow; seat++) {
          const isOccupied = Math.random() < 0.2;
          rowSeats.push(isOccupied ? "occupied" : "free");
        }
        initialSeats.push(rowSeats);
      }
    }
    setSeats(initialSeats);
  }, []);

  const handleSeatClick = (groupIndex, seatIndex) => {
    setSeats((prevSeats) =>
      prevSeats.map((row, rowIndex) => {
        if (rowIndex === groupIndex) {
          return row.map((seat, sIndex) => {
            if (sIndex === seatIndex) {
              if (seat === "free") return "selected";
              if (seat === "selected") return "free";
            }
            return seat;
          });
        }
        return row;
      })
    );
  };

  const selectedCount = seats.flat().filter((s) => s === "selected").length;
  const subtotal = selectedCount * pricePerSeat;

  const handleChangeLayout = () => {
    console.log("Cancelar clicado");
  };

  return (
    <div className="homepage-container">
      <br />
      <h2>Gerenciamento de assento</h2>

        <div className="driver-space"></div>
      <div className="bus-container">
        {seats.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`seat-row ${
              rowIndex === 1 || rowIndex === 3 ? "row-group-bottom" : ""
            }`}
          >
            {row.map((seat, seatIndex) => (
              <div
                key={seatIndex}
                className={`seat ${
                  seat === "free"
                    ? "seat-free"
                    : seat === "occupied"
                    ? "seat-occupied"
                    : "seat-selected"
                }`}
                onClick={() =>
                  seat !== "occupied" && handleSeatClick(rowIndex, seatIndex)
                }
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="seat seat-free small"></div> Livre
        </div>
        <div className="legend-item">
          <div className="seat seat-occupied small"></div> Ocupado
        </div>
        <div className="legend-item">
          <div className="seat seat-selected small"></div> Selecionado
        </div>
      </div>

      <div className="summary">
        <p>
          Assentos escolhidos:
          <span> {selectedCount}</span>
        </p>
        <p>
          Preço por assento:
          <span> R$ {pricePerSeat}</span>
        </p>
        <p>
          Subtotal:
          <span>
            {" "}
            {selectedCount} x {pricePerSeat} = R$ {subtotal}
          </span>
        </p>
      </div>

      <div className="footer-register">
        <ButtonCancel onClick={handleChangeLayout}>Cancelar</ButtonCancel>
        <Link to="/">
          <Button>Registrar</Button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterTravel;
