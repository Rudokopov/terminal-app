import React, { useContext, useEffect, useState } from "react";
import styles from "./Provider.module.scss";
import mtsIcon from "../../images/MTS.png";
import beelineIcon from "../../images/beeline.png";
import megafonIcon from "../../images/megafon.png";
import { Link } from "react-router-dom";
import { BogemeContext } from "../../context/BogemeContext";

const Provider = () => {
  const { isBogeme } = useContext(BogemeContext);
  return (
    <>
      <section
        className={`${styles.container} ${
          isBogeme ? styles.bogemeContainer : ""
        }`}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>
            {isBogeme
              ? "Take your phone provider, sir"
              : "Выберите оператора для оплаты"}
          </h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/pay/mts">
                <img className={styles.icon} src={mtsIcon} alt="Мтс" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/pay/beeline">
                <img className={styles.icon} src={beelineIcon} alt="Билайн" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/pay/megafon">
                <img className={styles.icon} src={megafonIcon} alt="Мегафон" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Provider;
