import React from "react";
import Navbar from "./components/Navbar";
import Section_first from "./components/Section_first";
import Section_second from "./components/Section_second";
import Countries from "./db.json";
import rasm from "./assets/images/image.png";

const App = () => {
  return (
    <>
      <header>
        <div className="header__container">
          <Navbar />
          <img src={rasm} alt="image" className="nav_image" />
        </div>
      </header>

      <main>
        <div className="main__container">
          <Section_first />

          <div className="wrap">
            {Countries.map((item, i) => {
              return (
                <Section_second
                  key={i}
                  flags={item.flags.png}
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
