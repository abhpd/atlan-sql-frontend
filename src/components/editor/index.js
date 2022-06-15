import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

import styles from "./Editor.module.css";
import Console from "../console";

function Editor() {
  return (
    <div className={`fill-div ${styles.flex}`}>
      <CodeMirror
        value="select * from Employees;"
        height="100%"
        theme="dark"
        extensions={[sql()]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
        className={`fill-div ${styles.CodeMirror} ${styles.p66}`}
      />
      <Console />
    </div>
  );
}

export default Editor;
