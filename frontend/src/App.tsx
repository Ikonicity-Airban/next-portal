import "./App.css";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import { FooterComponent } from "./components";

function App() {
  return (
    <section className="desktop:container mx-auto w-[98vw]">
      {/* header */}
      <NavbarComponent />
      {/* main body */}
      <div className="min-h-screen flex place-content-center">
        {/* the children auth */}
        <Outlet />
      </div>
      <FooterComponent />
      {/* footer */}
    </section>
  );
}

export default App;
