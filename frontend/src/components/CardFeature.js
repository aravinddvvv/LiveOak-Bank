import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/productSlide';
import toast from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa6";

const CardFeature = ({ image, name, category, id }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const handleAddCartProducts = () => {
    if (!isAuthenticated) {
      toast.error('Login first then Save for later');
    } else {
      dispatch(addCartItem({ id, name, category, image }));
      toast.success(`${name} added to Save for later!`);
    }
  };

  const handleCardClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to see the full details ');
    }
  };

  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col rounded'>
      <Link to={`/menu/${id}`} onClick={handleCardClick}>
        <div className='h-28 flex flex-col justify-center items-center'>
          <img src={image} className='h-full' alt={name} />
        </div>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>{name}</h3>
        <h5 className='font-semibold text-slate-600 text-center capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>{category}</h5>
      </Link>
      <button className='bg-blue-600 hover:bg-blue-400 py-1 mt-2 rounded text-white text-xl font-medium' onClick={handleAddCartProducts}>
       Save For Later<center><FaArrowRight /></center>
      </button>
    </div>
  );
};

export default CardFeature;
