import Card from "./Card";

const Gameboard = (props) => {
  return (
    <div className="grid">
      <Card {...props} />
    </div>
  );
};

export default Gameboard;