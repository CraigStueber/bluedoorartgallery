import { useState } from "react";
import Logo from "./assets/Logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="welcomeHeader">
          Thanks for visiting Blue Door Art Gallery!
        </h1>
        <img src={Logo} className="logoImg" />
        <p>My Gallery will be back open soon - for now visit my Etsy store!</p>
        <a href="https://www.etsy.com/shop/BlueDoorArtGallery">
          <p className="etsyBtn">Etsy Store</p>
        </a>
      </div>
    </>
  );
}

export default App;
