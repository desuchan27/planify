"use client"
import { CalendarIcon } from 'lucide-react';
import { FC, useState } from 'react'

function getDate() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = days[today.getDay()];
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${dayOfWeek}, ${month}/${date}/${year}`;
}

const DateProvider = ({ }) => {

  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className='flex flex-row items-center text-xs text-zinc-300'>
      <p>{currentDate}</p>
      <CalendarIcon className='ml-2'/>
    </div>
  )
}

export default DateProvider