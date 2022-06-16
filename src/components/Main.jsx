import { useState } from "react";
import styles from "./Main.module.css";

import Result from "./result";
import Editor from "./editor";

function Main() {
  const [left, setleft] = useState(false);
  const [state, setState] = useState({
    selected: 0,
    query: [
      "select * from 1;",
      "select * from 2;",
      "select * from 3",
      "select * from 1;",
      "select * from 2;",
      "select * from 3",
      "select * from 1;",
      "select * from 2;",
      "select * from 3",
      "select * from 1;",
      "select * from 2;",
      "select * from 3",
    ],
    console: [
      "This is 1",
      "This is 2",
      "This is 3",
      "This is 1",
      "This is 2",
      "This is 3",
      "This is 1",
      "This is 2",
      "This is 3",
      "This is 1",
      "This is 2",
      "This is 3",
    ],
    result: [
      "Result is 1",
      "Result is 2",
      "Result is 3",
      "Result is 1",
      "Result is 2",
      "Result is 3",
      "Result is 1",
      "Result is 2",
      "Result is 3",
      "Result is 1",
      "Result is 2",
      "Result is 3",
    ],
  });

  return (
    <div className={`fill-div ${styles.parent}`}>
      {left === true ? (
        <Editor state={state} setState={setState} />
      ) : (
        <Result state={state} setState={setState} />
      )}
      <button
        className={`${styles.switch_button}`}
        onClick={() => {
          setleft(!left);
        }}
      >
        🔁
      </button>
      {left === false ? (
        <Editor state={state} setState={setState} />
      ) : (
        <Result state={state} setState={setState} />
      )}
    </div>
  );
}

export default Main;
