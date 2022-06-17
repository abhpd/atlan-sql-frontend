import { useState, useEffect } from "react";
import styles from "./Result.module.css";
import * as d3 from "d3-fetch";

function Result({ state }) {
  const [data, setData] = useState({});
  const [keys, setKeys] = useState([]);
  const [rows, setRows] = useState(50);

  useEffect(() => {
    async function getData() {
      const data = await d3.csv(`/csv/${state.result[state.selected]}.csv`);
      setData(data);
      setKeys(Object.keys(data[0]));
    }
    getData();
  }, [state]);

  var headerRow;
  var dataRows;

  if (keys.length) {
    headerRow = (
      <tr>
        {keys.map((k) => (
          <th key={k}>{k}</th>
        ))}
      </tr>
    );

    dataRows = data.slice(0, Math.min(data.length, rows)).map((d, indx) => (
      <tr key={indx}>
        {Object.values(d).map((v, i) => (
          <td key={i}>{v}</td>
        ))}
      </tr>
    ));
  }

  return (
    <div className={`fill-div ${styles.background} ${styles.p100}`}>
      <div className={`${styles.padding}`}>
        <table>
          <thead>{headerRow}</thead>
          <tbody>{dataRows}</tbody>
        </table>
        <center>
          {data.length > rows ? (
            <a className={`${styles.link}`} onClick={() => setRows(rows + 50)}>
              Show 50 more results ...
            </a>
          ) : (
            "...END..."
          )}
        </center>
      </div>
    </div>
  );
}

export default Result;
