import React from "react";
import "./App.css";

import Orders from "./Components/Orders";

function App() {
  let orders = [];
  let keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    const newValue = JSON.parse(localStorage.getItem(keys[i]));
    orders = [...orders, newValue];
  }

  return (
    <div className="app">
      <Orders orders={orders} />
    </div>
  );
}

export default App;
