import logo from "../img/games.png";
const Header = () => {
  return (
    <div className="ui internally celled centered grid">
      <h2 className="ui icon centered header" id="headerTop">
        <img src={logo} id="headerLogo"></img>
        <div className="content">Welcome to Flag game</div>
      </h2>
    </div>
  );
};

export default Header;