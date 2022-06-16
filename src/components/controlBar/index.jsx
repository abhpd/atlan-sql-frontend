import styles from "./Control_bar.module.css";
import FileButton from "./FileButton";

function ControlBar({ state, setState }) {
  return (
    <div
      className={`fill-div ${styles.background} ${styles.whitetext} ${styles.flex_row} ${styles.flex_space_between}`}
    >
      <FileButton state={state} setState={setState} />
      <div className={`fill-div ${styles.flex_row} ${styles.flex_right}`}>
        <div className={`${styles.static_button} ${styles.run_button}`}>
          Run
        </div>
        <div className={`${styles.static_button} ${styles.delete_button}`}>
          Delete
        </div>
        <div className={`${styles.file_button}`}>+</div>
      </div>
    </div>
  );
}

export default ControlBar;
