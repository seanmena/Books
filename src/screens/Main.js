import "./Main.css";
import logo from "../assets/bookclub.png";
import bookside from "../assets/book-side.png";
import Page from "./Page";
// import Page from "./Page";

const Main = () => {
  return (
    <div>
      <div className="hero">
        <img className="bookside" src={bookside} alt="logo" />
        <img className="logo" src={logo} alt="logo" />
      </div>
      <Page />
    </div>
  );
};

export default Main;
