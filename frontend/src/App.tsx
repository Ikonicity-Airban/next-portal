import "./App.css";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import { FooterComponent } from "./components";

function App() {
  return (
    <main className="desktop:container mx-auto w-[98vw]">
      <NavbarComponent />
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* main body */}
      <FooterComponent />
      {/* footer */}
    </main>
  );
}

export default App;
