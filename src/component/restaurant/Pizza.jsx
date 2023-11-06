import React, { useEffect, useState } from 'react'

export default function Pizza() {

  const [pizza,setPizza]=useState([]);

  const getPizza = async()=>{
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    let data = await response.json();
    setPizza(data.recipes);
  }
  useEffect(()=>{
    getPizza();
  }, [])
  
  return (
    <div className='row overflow-x-hidden'>
     {
        pizza.map((ele)=>{
          return <div className='col-md-3 p-4 product'key={ele.recipe_id}>
            <h2 className='fs-5 text-success fw-bolder'>{ele.title}</h2>
            <img src={ele.image_url} className='w-75' />
            <h3 className='fs-6 fw-bolder'>{ele.publisher}</h3>
            
            </div>
        })
    }
    </div>
  )
}