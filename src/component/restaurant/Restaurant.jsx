import React from 'react'
import {Link} from 'react-router-dom'
export default function Restaurant() {
  return (
    <div className='row py-5'>
        <div className='col-md-4 text-center'>
            <Link to='/pizza' className='text-decoration-none fw-bold text-dark bg-dark-subtle'>Pizza</Link>
        </div>
        <div className='col-md-4 text-center'>
            <Link to='/onion' className='text-decoration-none fw-bold text-dark bg-dark-subtle'>Onion</Link>
        </div>
        <div className='col-md-4 text-center'>
            <Link to='/salad' className='text-decoration-none fw-bold text-dark bg-dark-subtle'>Salad</Link>
        </div>
    </div>
  )
}