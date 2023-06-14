import React, { useContext, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BogemeContext } from "../../context/BogemeContext";

interface HeaderProps {
  handleClickBogeme: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { isBogeme } = useContext(BogemeContext);
  const { handleClickBogeme } = props;

  return (
    <section
      className={`${styles.container} ${
        isBogeme ? styles.bogemeContainer : ""
      }`}
    >
      <div className={styles.content}>
        <Link className={styles.link} to="/">
          <h2>FakeTherminal</h2>
        </Link>
        <button onClick={handleClickBogeme}>Добавить блеска</button>
      </div>
    </section>
  );
};

export default Header;
