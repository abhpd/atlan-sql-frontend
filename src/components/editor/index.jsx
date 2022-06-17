import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

import styles from "./Editor.module.css";
import Console from "../console";
import ControlBar from "../controlBar";

function Editor({ state, setState }) {
  return (
    <div className={`fill-div ${styles.flex} ${styles.no_scroll}`}>
      <ControlBar state={state} setState={setState} />
      <CodeMirror
        value={state.query[state.selected]}
        height="100%"
        theme="dark"
        extensions={[sql()]}
        onChange={(value, viewUpdate) => {
          // console.log("value:", value);
          state.query[state.selected] = value;
          setState({ ...state });
        }}
        className={`fill-div ${styles.CodeMirror} ${styles.p70} ${styles.no_scroll}`}
      />
      <Console state={state} />
    </div>
  );
}

export default Editor;
