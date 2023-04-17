import React from 'react';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';


function App() {

  const addProductHandler =(proId,proPrice,proName,proCategory) => {
    const productaxx = {expenseamount:proPrice,description:proName,category:proCategory}
    const productfinal = JSON.stringify(productaxx);
    localStorage.setItem( proId,productfinal);
    const getIye = localStorage.getItem(123);
    console.log(getIye)
  
  }

  return (
    <div>
<AddProduct onAddProduct ={addProductHandler} />
<ProductList />

    </div>
  );
}

export default App;
