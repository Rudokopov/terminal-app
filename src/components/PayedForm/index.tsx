import React, { useContext, useEffect, useState } from "react";
import styles from "./PayedForm.module.scss";
import { motion } from "framer-motion";
import InputMask from "react-input-mask";
import { NumericFormat, NumberFormatValues } from "react-number-format";
import { useNavigate, useParams } from "react-router-dom";
import { BogemeContext } from "../../context/BogemeContext";

const PayedForm: React.FC = () => {
  const navigate = useNavigate();
  const { isBogeme } = useContext(BogemeContext);
  const mobileProvider = useParams();
  const [isLoading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState(isBogeme ? "Send" : "Отправить");
  const [data, setData] = useState<boolean | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [providerColor, setProviderColor] = useState("");

  useEffect(() => {
    if (mobileProvider.id === "mts") {
      setProviderColor("#f44336");
      return;
    }
    if (mobileProvider.id === "beeline") {
      setProviderColor("#F6D155");
      return;
    }
    if (mobileProvider.id === "megafon") {
      setProviderColor("#04AA6D");
      return;
    }
  }, []);

  useEffect(() => {
    if (data === true) {
      setButtonText(isBogeme ? "Succes" : "Успешно!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      setTimeout(() => {
        setButtonText(isBogeme ? "Send" : "Отправить");
      }, 3000);
    } else if (data === false) {
      setButtonText(isBogeme ? "Falled" : "Ошибка!");
    }
  }, [data]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (phoneNumber && parseInt(amount) >= 1 && parseInt(amount) <= 1000) {
      submitForm();
    } else {
      alert("Пожалуйста, заполните форму корректно");
    }
  };

  const submitForm = () => {
    setLoading(true);
    setTimeout(() => {
      const randomValue = Math.random() < 0.5;
      setData(randomValue ? true : false);
      setLoading(false);
    }, 1000);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleAmountChange = (values: NumberFormatValues) => {
    const { value } = values;
    if (value !== undefined && parseInt(value) > 1000) {
      setAmount("1000");
    } else {
      setAmount(value);
    }
  };

  return (
    <section
      className={`${styles.container} ${
        isBogeme ? styles.bogemeContainer : ""
      }`}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputMask
          className={`${styles.input} ${isBogeme ? styles.bogemeInput : ""}`}
          placeholder={isBogeme ? "Number" : "Номер телефона"}
          mask="+7 (999) 999-99-99"
          maskChar="_"
          name="phone"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <NumericFormat
          className={`${styles.input} ${isBogeme ? styles.bogemeInput : ""}`}
          placeholder={isBogeme ? "Count" : "Сумма"}
          thousandSeparator=" "
          allowNegative={false}
          decimalScale={0}
          onValueChange={handleAmountChange}
          value={amount}
          prefix="₽"
          maxLength={5}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.2, backgroundColor: "#578CA9" }}
          whileTap={{ scale: 0.8, backgroundColor: providerColor }}
          className={styles.submit}
          disabled={isLoading}
        >
          {buttonText}
        </motion.button>
      </form>
    </section>
  );
};

export default PayedForm;
