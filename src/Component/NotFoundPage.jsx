import React from 'react'
import notFound from '../Images/image404.gif'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='pn-cont'>
        <Link to='/home' className='text-decoration-none mb-4'>
              <button 
              className='back-btn'>
                <i className='fa fa-arrow-left'></i>
              </button>
        </Link>
        <img src={notFound} alt="" className='pn' />
    </div>
  )
}
