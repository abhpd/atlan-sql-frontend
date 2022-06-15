import { useState } from "react";
import styles from "./Main.module.css";

import Result from "./result";
import Editor from "./editor";

function Main() {
  const [state, setstate] = useState(0);
  return (
    <div className={`fill-div ${styles.parent}`}>
      {state == 1 ? <Editor /> : <Result />}
      {state == 0 ? <Editor /> : <Result />}
    </div>
  );
}

export default Main;
