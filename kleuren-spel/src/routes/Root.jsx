import { Outlet } from "react-router-dom";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import "../css/Root.css"

export default function Root() {
  return (
    <div className="root-container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}