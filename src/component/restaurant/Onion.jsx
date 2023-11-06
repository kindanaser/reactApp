import React, { useEffect, useState } from 'react'

export default function Onion() {

  const [onion,setOnion]=useState([]);

  const getOnion = async()=>{
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
    let data = await response.json();
    setOnion(data.recipes);
  }
  useEffect(()=>{
    getOnion();
  }, [])
  
  return (
    <div className='row overflow-x-hidden'>
     {
        onion.map((ele)=>{
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