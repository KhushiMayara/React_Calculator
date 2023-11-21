import styles from "./InputContainer.module.css";

const InputContainer = ({ inputDisplay }) => {
  return (
    <>
      <input
        type="text"
        className={styles.calculatorInput}
        value={inputDisplay}
        readOnly
      />
    </>
  );
};
export default InputContainer;
