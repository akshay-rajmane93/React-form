import React, { useState,useEffect } from 'react';
import Table from './Table';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Main() {
    const [inpute,setInput]=useState({
      name:"",
      orderNumber:"",
      purchaseDate:"",
        totalAmount:"",
        itemName:"",
        qty:"",
        pricePerUnit:"",
    });

    inpute.totalAmount = inpute.qty * inpute.pricePerUnit;

    const localdata=()=>{
      const locData=localStorage.getItem('users');
      return locData ? JSON.parse(locData):[];
    }
    const [user,setUser]=useState(localdata);
    
  const loader = async()=>{
    const url = await axios.get("http://localhost:8000/users");
    setUser(url.data.reverse());
    console.log(url);
  }
  useEffect(()=>{
    loader();
  },[]);
  let history = useHistory();

        
    const changeevent =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setInput((prev)=>{
            return{
                ...prev,[name]:value
            };
        })
    }

      const onAdd=async()=>{
        if(inpute.name===""&&inpute.purchaseDate===""&&inpute.qty===""&&inpute.itemName===""&&inpute.orderNumber===""&&inpute.pricePerUnit===""){
       
        alert("fill fields");
        }else{
          const res= await axios.post("http://localhost:8000/users",inpute);
          history.push('/');
           console.log(res);
           setInput({
            name:"",
            orderNumber:"",
            purchaseDate:"",
              totalAmount:"",
              itemName:"",
              qty:"",
              pricePerUnit:"",
           })
          
        }
      }

     

      useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(user));
    },[user]);

    const onRemove =()=>{
        if(window.confirm("do you want to remove")){
          setInput({
            name:"",
            orderNumber:"",
            purchaseDate:"",
              totalAmount:"",
              itemName:"",
              qty:"",
              pricePerUnit:"",
          })
        }else{
            setInput((prev)=>{
              return{...prev}
            })
        }
    }



  return (
    <div className="main">
    <div className="enter_order">
        <h3 className="m-2 pb-2">Enter Order</h3>
        
            <label type="text" >Order No : </label>
            <input type="text" onChange ={changeevent} value={inpute.orderNumber} name="orderNumber" required/>
            <label type="date">Purchase Date : </label>
            <input type="date"  onChange ={changeevent} value={inpute.purchaseDate} name="purchaseDate" required/>
        
            <label type="text">Customer Name : </label>
            <input type="text" onChange ={changeevent} value={inpute.name} name="name" required/>
            <label type="text">Total Amount : </label>
            <label type="number">  {inpute.totalAmount}</label>
       
    </div>
    <div className="add_item">
    <h3 className="m-2">Add Items</h3>
    <table class="table m-2">
  <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price per unit</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><input type="text" onChange ={changeevent} value={inpute.itemName} name="itemName" required/></td>
      <td><input type="number" onChange ={changeevent} value={inpute.qty} name="qty" required/></td>
      <td><input type="number" onChange ={changeevent} value={inpute.pricePerUnit} name="pricePerUnit" required/></td>
      <td><label type="number">{inpute.totalAmount}</label></td>
      <td> <button onClick={onRemove} className="btn btn-danger">Remove</button></td>
    </tr>
  </tbody>
</table>
    </div>
    <button onClick={onAdd} className="btn btn-success m-2">Save</button>
   
    <Table user={user}/>
    </div>
    
  );
}

export default Main;
