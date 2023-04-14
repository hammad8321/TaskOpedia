import ReactDOM from "react-dom/client";
import "./CSS/styles.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ background: "black", color: "gray" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <div className="container row"> Student Enrolled </div>

    <Footer />
  </div>
);
