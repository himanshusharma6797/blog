import React from 'react'

export default function HeaderTwo(props) {
    console.warn('props from Header Container',props);

  return (
    <div className='add-to-cart'>
            <span className='cart-count'>{props.data.length}</span>
            <img src='https://img.lovepik.com/free-png/20210918/lovepik-shopping-cart-png-image_400246975_wh1200.png' alt=''/>
    </div>
  )
}
