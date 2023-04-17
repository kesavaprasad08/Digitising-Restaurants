import React, { useState } from 'react';

const AddProduct = (props) => {

    const [enteredProductId, setEnteredProductId] = useState('');
    const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
    const [enteredProductName, setEnteredProductName] = useState('');
    const [enteredCategory ,setEnteredCategory] =useState('');

    const addProductHandler =(e) =>{
        e.preventDefault();
        // console.log(enteredProductId + enteredProductName + enteredSellingPrice +enteredCategory);
        props.onAddProduct(enteredProductId, enteredProductName, enteredSellingPrice, enteredCategory);
    
    
    } 

    const productIdChangeHandler =(e) => {
        setEnteredProductId(e.target.value);
    }
    const sellingPriceChangeHandler =(e) => {
        setEnteredSellingPrice(e.target.value);
    }

    const  ProductNameChangeHandler =(e) => {
        setEnteredProductName(e.target.value);
    }
    const categoryChangeHandler = (e) => {
        setEnteredCategory(e.target.value);
    }

    return(
        <div>
            <form onSubmit={addProductHandler}>
                <label htmlFor ='product id'>Product ID</label>
                <input
                id='proID' 
                type='number'
                onChange={productIdChangeHandler}
                />
                <label htmlFor ='selling price'>Selling Price</label>
                <input
                id='sellPrice' 
                type='number'
                onChange={sellingPriceChangeHandler}
                />
                <label htmlFor ='product name '>Product Name</label>
                <input 
                id="prodName"
                type='text'
                onChange={ProductNameChangeHandler} 
                />
                <label htmlFor ='category'>Choose a Category</label>
                <select 
                id="category"
                type=""

                onChange={categoryChangeHandler}
                > <option value="Electronic">Electronic</option>
                <option value="food">food</option>
                <option value="skin care">skin care</option>
                
                </select>
            <button>Add Product</button>
            </form>
        </div>
    )
};

export default AddProduct;