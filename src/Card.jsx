import "./App.css";

const Card = ({ title, image, desc, setBackground }) => {
  return (
    <div
      className="card-view"
      onMouseOver={() => setBackground(image)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 id="title">{title}</h2>
    </div>
  );
};

export default Card;
