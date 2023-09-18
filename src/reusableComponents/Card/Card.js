import "./Card.css";

const Card = (props) => {
  return (
    
      <div className={`card shadow rounded-0 me-4 align-items-center ${props.color}`} style={{
          width: "20rem", height: "15rem",
      }}>
  
  <div className="card-body d-flex align-items-center justify-content-center" >
    <h5 className={`card-title ${props.b_border} text-light pb-3`}>{props.text}</h5>
  </div>
  
</div>
    
  );
};

export default Card;
