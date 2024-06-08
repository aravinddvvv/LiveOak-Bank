import React from 'react';
import { useSelector } from 'react-redux';
import Cartrecipe from '../components/Cartrecipe';
import emptyCartImage from '../Assets/heart-unscreen.gif'; // Import the empty cart GIF image

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  return (
    <div className='p-2 md:p-4 justify-center items-center'>
      <h2 className='text-bold md:text-4xl font-bold text-black'>Your Favourite Recipes</h2>
      <center>

      <div className='my-4 flex gap-3 justify-center items-center'>
        <div className='w-full max-w-3xl'>
          {productCartItem.length === 0 ? (
            <div className=' justify-center items-center'>
              <img src={emptyCartImage} alt='Empty Cart' className='w-80 h-60  justify-center items-center' />
              <p className='text-3xl font-bold text-black-500'>Your favorite recipes list is empty.</p>
            </div>
          ) : (
          
            productCartItem.map((el) => (
              <Cartrecipe
                key={el._id}
                id={el._id}
                name={el.name}
                image={el.image}
                category={el.category}
                qty={el.qty}
                total={el.total}
              />
            ))
          )}
        </div>

      
        <div className=''></div>
      </div>
      </center>
    </div>
  );
};

export default Cart;
