import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
   
    return (
        <div className='my-6'>
          <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  className="max-w-sm rounded-lg shadow-2xl" src={chair} alt='dentist chair'/>
    <div className='mr-6'>
     <DayPicker
     mode="single"
     selected={selectedDate}
     onSelect={setSelectedDate}
     
     />
     
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentBanner;