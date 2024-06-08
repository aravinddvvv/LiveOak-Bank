// Home.js

import React, { useRef, useState } from 'react';
import man from '../Assets/money.png';
import CardFeature from '../components/CardFeature';
import { useSelector } from 'react-redux';
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProducts from '../components/AllProducts';
import verify from '../Assets/verified-unscreen.gif';
import Contact from './Contact';
import CustomerInfoCard from '../components/Customerinfo';

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const categoriesToInclude = ["Banking", "CarLoan", "HomeLoan", "Cards", "Insurance"];
  const homeProductCartListTop = productData.filter(el => categoriesToInclude.includes(el.category));
  console.log(homeProductCartListTop);
  const slideProductRef = useRef();
  const [showThanks, setShowThanks] = useState(false);

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 400;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 400;
  };

  const handleSubscribe = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3'>
        <div className='md:w-1/2'>
          <div className='flex gap-2 bg-blue-300 px-2 items-center rounded-full'>
            <p className='text-sm font-medium'>Your Neighborhood Bank....Where Money Meet Trust....Banking With No Overdraft Fees....</p>
            <img src='https://media3.giphy.com/media/gulXBo07CiPIK57OT1/giphy.gif?cid=6c09b95213ldfksclnc1xftvn578dm0pfc6h922qu7yvdiyn&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' className='h-7' alt='moneygif' />
          </div><br />
          <h2 className='text-4xl font-bold md:text-3xl p-4'>LiveOak Bank</h2>
          <h2 className='text-6xl font-bold md:text-6xl p-4'>Banking For<span className='text-blue-600'> Everyone </span> </h2>
          <h2 className='text-6xl font-bold md:text-6xl p-4'>Turning Financial </h2>
          <h2 className='text-6xl font-bold md:text-6xl p-4'>Dreams into <span className='text-blue-600'>Reality</span> </h2>
          <p className='py-4 text-bold p-4'>Prepare for effortless transactions, enhanced security, and personalized services like never before! Together,<br />we're re-inventing your financial future. </p>
          <button onClick={handleSubscribe} className='font-bold bg-blue-600 text-slate-200 px-4 py-2 rounded-md'>Subscribe</button>
        </div>

        <div className='w-1/2 flex justify-end'>
          <img src={man} className='max-w-50 h-30 rounded-md' alt='man with money' />
        </div>
      </div>

      {/* Customer Info Card */}
      <CustomerInfoCard 
        name="John Doe"
        depositAmount={5000}
        balanceAmount={15000}
      />

      {/* next */}
      <div className=''>
        <div className='flex w-full items-center'>
          <h1 className='font-bold text-2xl py-3 mb-4'>Our Services</h1 >
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-yellow-300 hover:bg-yellow-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextProduct} className='bg-yellow-300 hover:bg-yellow-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListTop.map(el => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  image={el.image}
                />
              );
            })
          }
        </div>
      </div>

      {showThanks && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0">
          <div className="bg-white p-5 rounded-md">
            <img src={verify} className="mx-auto mb-4" alt="verified" />
            <h2 className="text-2xl font-bold mb-4 items-center justify-center">Thank You for Subscribing!</h2>
            <p className="text-lg items-center justify-center">We're excited to have you join our community.</p>
          </div>
        </div>
      )}

      <AllProducts heading={"How Can We Help You Today?"} />
      <Contact />
    </div>
  );
};

export default Home;
