import React from 'react'

export default function HomeTwo(props) {
    console.log('props from Home Container',props);
  return (
    <div>
        <h1>Home Two Component</h1>
        <div className='cart-wapper'>
            <div className='image-wapper item'>
                <img src='https://img.favpng.com/12/4/7/iphone-x-apple-telephone-smartphone-t-mobile-png-favpng-ehzxSTeG5UZkk0J4CViv3pctj.jpg' alt='etc'/>
            </div>
            <div className='text-wapper item'>
                <span>iPhone</span>
                <span>Price: 1,00,000 Ruppe</span>
            </div>
            <div className='btn-wapper item'>
                <button onClick={()=>props.addToCartHandler({price:10,name:'eye fone'})}>Add to Cart</button>
            </div>
            <div className='btn-wapper item'>
                <button className='remove-cart-btn' onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>
            </div>
        </div>
    </div>
  )
}
