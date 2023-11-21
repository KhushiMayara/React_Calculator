import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ handlerOnClickBtn }) => {
  let buttonItem = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
  ];

  return (
    <>
      <div className={styles.btnContainer}>
        {buttonItem.map((btn) => (
          <button
            key={btn}
            type="button"
            className={styles.calculatorBtn}
            onClick={() => handlerOnClickBtn(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
