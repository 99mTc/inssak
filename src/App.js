import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Containers from "./Containers";
import Footer from "./Footer";

const Main = () => {
  const style = {
    width: "-moz-available",
    marginTop: "4vh",
  };
  return (
    <div>
      <img
        alt=""
        src={`${process.env.PUBLIC_URL}\\img\\main.png`}
        style={style}
      />
    </div>
  );
};
const Header = () => {
  const header = {
    marginTop: "1%",
    position: "fixed",
  };
  const logo = {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "600",
    marginLeft: "2.5vw",
  };
  return (
    <header style={header}>
      <span style={logo}>SSAK展</span>
    </header>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Containers />
              <Footer />
            </>
          }
        >
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
