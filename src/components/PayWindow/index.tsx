import React, { useContext, useEffect, useState } from "react";
import styles from "./payform.module.scss";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import mtsIcon from "../../images/MTS.png";
import beelineIcon from "../../images/beeline.png";
import megafonIcon from "../../images/megafon.png";
import PayedForm from "../PayedForm";
import { BogemeContext } from "../../context/BogemeContext";

const PayWindow: React.FC = () => {
  const { isBogeme } = useContext(BogemeContext);
  const phoneProvider = useParams();
  const [providerImage, setProviderImage] = useState("");

  const handleProviderImage = () => {
    if (phoneProvider.id === "mts") {
      setProviderImage(mtsIcon);
      return;
    }
    if (phoneProvider.id === "beeline") {
      setProviderImage(beelineIcon);
      return;
    }
    if (phoneProvider.id === "megafon") {
      setProviderImage(megafonIcon);
      return;
    }
  };

  useEffect(() => {
    handleProviderImage();
  }, []);

  return (
    <>
      <section className={styles.container}>
        <motion.div
          className={styles.motion}
          style={{ x: "1000px" }}
          animate={{ x: "-1000px" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <h3>
            {isBogeme
              ? "It's all right, no one has money to buy something, you are pefrect, sir."
              : "Сдается рекламное место"}
          </h3>
        </motion.div>
        <h2 className={styles.title}>
          {isBogeme ? "Payment form, Sir" : "Форма оплаты"}
        </h2>
        <img
          className={styles.image}
          src={providerImage}
          alt="Мобильный оператор"
        />
        <ul className={styles.list}>
          <h2>{isBogeme ? "Rules, Sir" : "Правила"}</h2>
          <li>
            <p>
              1.
              {isBogeme
                ? "Possible interruptions with pigeons, Sir"
                : "Не всегда переводятся"}
            </p>
          </li>
          <li>
            <p>
              2.
              {isBogeme
                ? "Maximum for one transaction thousand derevyanny, Sir"
                : "Не больше тысячи рублей"}
            </p>
          </li>
        </ul>
        <PayedForm />
      </section>
    </>
  );
};

export default PayWindow;
