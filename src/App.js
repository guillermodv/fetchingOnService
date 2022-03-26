import { useEffect, useState } from "react";
import { getData } from "./services/posts";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState();
  const [retriveData, setRetriveData] = useState(true);

  useEffect(() => {
    if (retriveData) {
      Promise.all([getData()]).then((data) => setItems(data));
      setRetriveData(!retriveData);
    }
  }, [retriveData]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {console.log(items)}
    </div>
  );
}
