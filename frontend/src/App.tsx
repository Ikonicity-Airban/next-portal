import "./App.css";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import { FooterComponent } from "./components";

function App() {
  return (
    <section className="w-[98vw] mx-auto">
      {/* header */}
      <NavbarComponent />
      {/* main body */}
      <div className="min-h-[70vh] w-full">
        {/* the children auth */}
        <Outlet />
      </div>
      <FooterComponent />
      {/* footer */}
    </section>
  );
}

export default App;
