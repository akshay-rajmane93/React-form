import React, { useEffect } from 'react';
import Main from './Main';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Table2(props) {
    
  return (
    <div className="table_component2">
<table className="table m-2">
  <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Qty</th>
      <th scope="col">Item Price</th>
      <th scope="col">Order No</th>
    </tr>
    </thead>
    {props.user2.map((val,index)=>{
        return(
        <tbody>
    <tr key={index} id={index}>
      <th scope="row">{val.itemName}</th>
      <td>{val.qty}</td>
      <td>{val.pricePerUnit}</td>
      <td>{val.orderNumber}</td>
    </tr>
  </tbody>)
    })}
  
 
</table>

    </div>
  );
}

export default Table2;
