import React,{ useState} from 'react';

const ProductList = (props) => {

    const [electronicItemsList,setElectronicItemsList] = useState([]);
    const [foodItemsList,setFoodItemsList] = useState([]);
    const [skinCareItemsList,setSkinCareItemsList] = useState([]);


    let values  = [];
    let keys =Object.keys(localStorage);
    
    for (let i=0;i<keys.length;i++){
        const newValue =(JSON.parse(localStorage.getItem(keys[i])))
         values = [...values , newValue ];
       

    }
    console.log(values);
   

    for(let i =0;i<values.length;i++){
        if(values[i].category === 'food'){
           foodItemsList.push(values[i]);
        }
        else if(values[i].category === 'skin care'){
            skinCareItemsList.push(values[i]); 
        }
        else {
            electronicItemsList.push(values[i]);
        }
    }
    console.log(foodItemsList);
//   localStorage.getItem()
return (
<div>
    
<h3>Electronic Items</h3>
{electronicItemsList.map(function(food,k) { 
    return(<div> <li key = {k}>{food.description} {food.category} {food.expenseamount } </li><button>Delete Product</button></div>)
})}
<h3>Food Items</h3>
{foodItemsList.map(function(food,k) { 
    return(<div> <li key = {k}>{food.description} {food.category} {food.expenseamount } </li><button>Delete Product</button></div>)
})}
    {/* {foodItemsList[0].category} {foodItemsList[0].description}  <button>Delete Product</button> */}
     
<h3>Skin Care Items</h3>
{skinCareItemsList.map(function(food,k) { 
    return(<div> <li key = {k}>{food.description} {food.category} {food.expenseamount } </li><button>Delete Product</button></div>)
})}
</div>
);
}

export default ProductList;