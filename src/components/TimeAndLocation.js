import React from 'react'

const TimeAndLocation = ({weather : {name, country, dt}}) => {

   // Convert Unix timestamp (dt) to local time
   const localTime = new Date(dt * 1000);
   // Format the date and time to display
   // Format the local time
  const day = localTime.toLocaleString('en-US', { weekday: 'long' });
  const month = localTime.toLocaleString('en-US', { month: 'short' });
  const date = localTime.toLocaleString('en-US', { day: 'numeric' });
  const year = localTime.toLocaleString('en-US', { year: 'numeric' });
  const time = localTime.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });



  return (
    <div className='TimeAndLocation'>
    <div className='Time'>
    <p>{`${day} ${date},  ${month}, ${year} | Time : ${time}`}</p>
    </div>
    <div className='Location'>
        <p className='font-bold'>{`${name}, ${country}`}</p>
    </div>
    </div>
    
  )
}

export default TimeAndLocation
