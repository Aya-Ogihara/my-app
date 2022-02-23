import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import TopView from './TopView';
import CreateView from './CreateView';
import EventView from './EventView';

const MainView = () => {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<TopView />} />
        <Route path='/create' element={<CreateView />} />
        <Route path='/event' element={<EventView />} />
      </Routes>
    </div>
  );
};

export default MainView;
