import Card from "./Card";

const Gameboard = (props) => {
  return (
    <div className="ui four column internally celled grid">
      <Card {...props} />
    </div>
  );
};

export default Gameboard;