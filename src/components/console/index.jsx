import styles from "./Console.module.css";

function Console({ state }) {
  return (
    <div
      className={`fill-div ${styles.background} ${styles.p30} ${styles.whitetext} ${styles.padding} ${styles.no_scroll}`}
    >
      console
      <br />
      {state.console[state.selected]}
    </div>
  );
}

export default Console;
