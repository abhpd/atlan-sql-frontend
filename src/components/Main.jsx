import { useState } from "react";
import styles from "./Main.module.css";

import Result from "./result";
import Editor from "./editor";

function Main() {
  const [left, setleft] = useState(false);
  const [state, setState] = useState({
    selected: 0,
    query: [
      "select * from customers;",
      "select * from orders;",
      "select * from products.",
    ],
    console: [
      "Query Executed Successfully.",
      "Query Executed Successfully",
      "Query Executed Successfully",
    ],
    result: ["customers", "orders", "products"],
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
