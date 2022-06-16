import styles from "./Result.module.css";
function Result({ state }) {
  return (
    <div className={`fill-div ${styles.background}`}>
      <div className={`${styles.padding}`}>{state.result[state.selected]}</div>
    </div>
  );
}

export default Result;
