import React, { useState } from 'react';
import Main from './Main';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Table2 from './Table2';

function Table(props) {
  const[component,setComponent] =useState(false);

  const showData=()=>{
    setComponent(true);
  }
  return (<>
  <div className="table_component">
    <table className="table m-2">
  <thead>
    <tr>
      <th scope="col">Order No</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Purchase Date</th>
      <th scope="col">Total Amount</th>
    </tr>
  </thead>
    {props.user.map((val,index)=>{
      return(
  <tbody>
      <tr key={index} id={index} onClick={showData} >
      <th scope="row">{val.orderNumber}</th>
      <td>{val.name}</td>
      <td>{val.purchaseDate}</td>
      <td>{val.totalAmount}</td> </tr>
      </tbody>
      )
    })}
    </table>
    </div>
    <div>{component?<Table2 user2={props.user}/>:null}</div>
  </>)
    
  }
export default Table;
