import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import new_collection from '../Assets/new_collections'

const NewCollections = (props) => {
  return (
    <>
    <div className='new-collections'>
    
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
    </div>

    </>
  )
}

export default NewCollections
