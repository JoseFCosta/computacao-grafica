const Card = ({
  imageUrl,
  address,
  departureDate,
  arrivalDate,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} className="card-image" />
      <div className="card-address">{address}</div>
      <div className="card-info">
        Ida: {departureDate}
        <br />
        Chegada: {arrivalDate}
      </div>
    </div>
  );
};

export default Card;