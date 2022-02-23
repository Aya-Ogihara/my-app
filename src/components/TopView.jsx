import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Header from './Header';

//images
import button from '../create-event-button.png';
import productRight from '../product-image_right.png';
import productLeft from '../product-image_left.png';
import productMiddle from '../product-image_middle.png';

const TopView = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className='top-content'>
        <h1>
          Facebook events
          <br /> without Facebook.
        </h1>
        <p>
          Easily host and share events with your <br />
          friends across any social media.
        </p>
        <img
          onClick={() => navigate('/create')}
          src={button}
          className='create-event-button'
          alt='create-event-button'
        />
      </div>
      <div className='products'>
        <img src={productRight} className='product-right' alt='product1' />
        <img src={productMiddle} className='product-middle' alt='product2' />
        <img src={productLeft} className='product-left' alt='product3' />
      </div>
    </>
  );
};

export default TopView;
