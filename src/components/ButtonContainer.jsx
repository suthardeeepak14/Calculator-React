import styles from "./buttonContainer.module.css";
function ButtonContainer() {
  const buttonName = [
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
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((buttonName) => (
        <button className={styles.button} key={buttonName}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
