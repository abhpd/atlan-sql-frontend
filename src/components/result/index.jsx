import styles from "./Result.module.css";
function Result({ state }) {
  return (
    <div className={`fill-div ${styles.background}`}>
      {state.result[state.selected]}
    </div>
  );
}

export default Result;
