import InputContainer from "./Components/InputContainer";
import ButtonContainer from "./Components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalValue] = useState("");
  const handleOnClickButton = (btnText) => {
    console.log(btnText);
    if (btnText === "C") {
      setCalValue("");
    } else if (btnText === "=") {
      const result = eval(calVal);
      setCalValue(result);
    } else {
      let newbtnText = calVal + btnText;
      setCalValue(newbtnText);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <InputContainer inputDisplay={calVal} />
        <ButtonContainer handlerOnClickBtn={handleOnClickButton} />
      </div>
    </>
  );
}

export default App;
