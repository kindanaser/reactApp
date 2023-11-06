import React, { useEffect, useState } from 'react'

export default function Home() {
 const [products,setProducts]=useState([]);

 const getProducts = async()=>{
   let response = await fetch("https://fakestoreapi.com/products");
   let data = await response.json();
   setProducts(data);
 }
 useEffect( ()=> {
  getProducts();
 } , [])

  return (
    <div className='row'>
      {
        products.map((ele)=>{
          return  <div className='col-md-3 p-4 my-4' key={ele.id}>
           <h2 className='fs-5 text-success fw-bolder'>{ele.title}</h2>
           <img src={ele.image} className='w-50 d-block' />
           <span className='text-danger'>{ele.price}</span>
          </div>
        })
      }
    </div>
  )
}
