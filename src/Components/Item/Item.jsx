import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (

    <>

      <div className="max-w-sm rounded overflow-hidden shadow-md transition duration-300 hover:bg-slate-200 h-full w-full ">
        <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img className="w-full" onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          {props.name}
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${props.new_price}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${props.old_price}</span>
        </div>
      </div>


    </>

  )
}

export default Item
