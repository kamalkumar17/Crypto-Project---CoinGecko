// import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
// import { Currencycontext } from "./context/CurrencyContext";

function App() {
  // const [currency, setCurrency] = useState('usd');
  return (
    <>
      {/* <Currencycontext.Provider value={{currency,setCurrency}}> */}
        <Home />
      {/* </Currencycontext.Provider> */}
    </>
  )

}

export default App;