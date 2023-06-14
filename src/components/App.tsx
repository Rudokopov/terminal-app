import React, { useState } from "react";
import styles from "./App.module.scss";
import Header from "./Header";
import Provider from "./Provider";
import { Route, Routes } from "react-router-dom";
import PayWindow from "./PayWindow";
import { BogemeContext } from "../context/BogemeContext";

const App = () => {
  const [isBogeme, setBogeme] = useState(false);

  const handleClickBogeme = () => {
    setBogeme(!isBogeme);
  };
  return (
    <div
      className={`${styles.container} ${
        isBogeme ? styles.bogemeContainer : ""
      }`}
    >
      <BogemeContext.Provider value={{ isBogeme, setBogeme }}>
        <Header handleClickBogeme={handleClickBogeme} />

        <Routes>
          <Route path="/" element={<Provider />} />
          <Route path="/pay/:id" element={<PayWindow />} />
        </Routes>
      </BogemeContext.Provider>
    </div>
  );
};

export default App;
