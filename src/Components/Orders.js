import React, { useState } from "react";

import './Orders.css';


const Orders = (props) => {
  const [enteredOrders, setEnteredOrders] = useState(props.orders);
  const [enteredOrderId, setEnteredOrderId] = useState();
  const [enteredPrice, setEnteredPrice] = useState();
  const [enteredDish, setEnteredDish] = useState();
  const [enteredTable, setEnteredTable] = useState();


    
  const addOrderHandler = (e) => {
    e.preventDefault();
    const orderDetails = {
      expenseamount: enteredPrice,
      description: enteredDish,
      category: enteredTable,
      id: enteredOrderId,
    };
    localStorage.setItem(enteredOrderId, JSON.stringify(orderDetails));
    setEnteredOrders((prev) => {
      return [...prev, orderDetails];
    });
  };
  const orderIdChangeHandler = (e) => {
    setEnteredOrderId(e.target.value);
  };
  const dishChangeHandler = (e) => {
    setEnteredDish(e.target.value);
  };
  const PriceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const tableChangeHandler = (e) => {
    setEnteredTable(e.target.value);
  };

  const deleteHandler=(e)=>{
    localStorage.removeItem(e);
    setEnteredOrders((prev)=>{
        const updatedOrders =prev.filter(order => order.id !== e);
        return updatedOrders;
    });
  } 

  return (
    <div>
        <header>Digitising Restaurants</header>
      <div className="container">
        <form onSubmit={addOrderHandler}>
          <label>Unique Order ID: </label>
          <input type="number" onChange={orderIdChangeHandler}></input>

          <label>Choose Price: </label>
          <input type="number" onChange={PriceChangeHandler}></input>

          <label>Choose Dish: </label>
          <input type="text" onChange={dishChangeHandler}></input>

          <label>Choose a Table</label>
          <select required onChange={tableChangeHandler}>
            <option value=""></option>
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
          </select>
<br></br>
          <button> Add to bill</button>
        </form>
      </div>

      <div className='productsContainer'>
        <h1>Orders</h1>
        <h3>Table 1</h3>
        {enteredOrders.map((e) => {
          if (e.category === "table1") {
            return (
              <li key={e.id}>
                {e.expenseamount} - {e.category} - {e.description}  <button onClick={() => deleteHandler(e.id)} >Delete Order</button>
              </li>
            );
          }
          return;
        })}
        <h3>Table 2</h3>
        {enteredOrders.map((e) => {
          if (e.category === "table2") {
            return (
              <li key={e.id}>
                {e.expenseamount} - {e.category} - {e.description}  <button onClick={() => deleteHandler(e.id)} >Delete Order</button>
              </li>
            );
          }
        })}
        <h3>Table 3</h3>
        {enteredOrders.map((e) => {
          if (e.category === "table3") {
            return (
              <li key={e.id}>
                {e.expenseamount} - {e.category} - {e.description} <button onClick={() => deleteHandler(e.id)} >Delete Order</button>
              </li>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Orders;
