import logo from "../images/react.png";

const SubHeaderStyles = {
  backgroundColor: "lightGrey",
  color: "blue",
};

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        alt="pic"
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className="h2 pt-4 text-white-50 "> React Cource</span>
    </div>
  );
}

function SubHeader() {
  return (
    <p style={SubHeaderStyles} className="text-center">
      {" "}
      This will be an exciting cource
    </p>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
};

export default Header;
