

import React from 'react';

const CustomerInfoCard = ({ name, depositAmount, balanceAmount }) => {
  return (
    <div className='bg-blue-400 shadow-lg rounded-lg p-4 m-4'>
        <center><h1 className='text-xl font-bold mb-2'>Your Account</h1></center>
      <h3 className='text-xl font-bold mb-2'>{name}</h3>
      <p className='text-black-700 font-bold'>Deposit Amount: ${depositAmount}</p>
      <p className='text-black-700 font-bold'>Balance Amount: ${balanceAmount}</p>
    </div>
  );
};

export default CustomerInfoCard;
