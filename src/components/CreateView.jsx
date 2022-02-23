import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Header from './Header';

const CreateView = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [hostName, setHostName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const handleNext = () => {
    navigate('/event');
    console.log(eventName);
  };

  return (
    <div className='create-view'>
      <Header />
      <h2 className='view-title'>Creating my new event</h2>
      <form className='form'>
        <label>
          Event name:
          <input
            type='text'
            name='event-name'
            className='event-name'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <label>
          Host name:
          <input
            type='text'
            name='host-name'
            className='host-name'
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
        </label>
        <label>
          Start date:
          <input
            type='date'
            name='start-date'
            className='start-date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End date:
          <input
            type='date'
            name='end-date'
            className='end-date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type='text'
            name='location'
            className='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type='file'
            name='event-image'
            className='event-image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <button className='next-button' onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default CreateView;
