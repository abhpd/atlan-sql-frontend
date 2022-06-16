import styles from "./Control_bar.module.css";

function FileButton({ state, setState }) {
  const onClick = (event) => {
    state.selected = Number(event.target.innerHTML) - 1;
    setState({ ...state });
  };

  var i = 1;
  var buttons = state.query.map((ele) => {
    return (
      <div
        className={`${styles.file_button} ${
          Number(i) == Number(state.selected) + 1 ? styles.highlight : ""
        }`}
        onClick={onClick}
      >
        {i++}
      </div>
    );
  });

  return (
    <div
      className={`${styles.flex_row} ${styles.file_buttons} ${styles.width_full}`}
    >
      {buttons}
    </div>
  );
}

export default FileButton;
