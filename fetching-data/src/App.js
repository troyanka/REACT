import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { tsConstructorType } from "@babel/types";

function App() {
  const [data, setData] = useState({ hits: [] });


  

  return (
    <ul>
      {data.hits.map(item => {
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>;
      })}
    </ul>
  );
}

export default App;
