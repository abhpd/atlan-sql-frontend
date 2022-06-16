import styles from "./Control_bar.module.css";
import FileButton from "./FileButton";

function ControlBar({ state, setState }) {
  const addNewQuery = () => {
    state.query.push("-- Write your Query Here.");
    state.console.push("Errors related to your query will be displayed here.");
    state.result.push("Your Query Result will be displayed here.");

    setState({ ...state });
  };

  const removeQuery = () => {
    if (state.query.length > 1) {
      state.query.splice(state.selected, 1);
      state.console.splice(state.selected, 1);
      state.result.splice(state.selected, 1);
      state.selected = 0;
      setState({ ...state });
    }
  };

  return (
    <div
      className={`fill-div ${styles.background} ${styles.whitetext} ${styles.flex_row} ${styles.flex_space_between}`}
    >
      <FileButton state={state} setState={setState} />
      <div className={`${styles.flex_row} ${styles.flex_right}`}>
        <form action="">
          <button
            className={`fill-div ${styles.submit_button} ${styles.whitetext}`}
            type="submit"
          >
            <div className={`${styles.static_button} ${styles.run_button}`}>
              Run
            </div>
          </button>
        </form>

        <div
          className={`${styles.static_button} ${styles.delete_button}`}
          onClick={removeQuery}
        >
          Delete
        </div>
        <div
          className={`${styles.file_button} ${styles.add_button}`}
          onClick={addNewQuery}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default ControlBar;
