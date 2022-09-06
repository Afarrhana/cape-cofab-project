import React from 'react';
import '../index.css';

import { useNavigate } from 'react-router-dom';

export const MyProfile = () => {
  let navigate = useNavigate();

  return (
    <div>
      <ul className="flex border-b bg-purple-200">
        <li className="-mb-px mr-1">
          <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl" href="#">College Facilities Booking System</a>
        </li>
        <li className="ml-1">
          <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl hover:bg-purple-500 hover:text-white" onClick={() => navigate('/homepage')}>Home</a>
        </li>
        <li className="ml-1">
          <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl hover:bg-purple-500 hover:text-white" onClick={() => navigate('/mybooking')}>My Booking</a>
        </li>
        <li className="ml-1">
          <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl hover:bg-purple-500 hover:text-white" onClick={() => navigate('/myhistory')}>History</a>
        </li>
        <li className="ml-1">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-14"
            alt="Avatar" onClick={() => navigate('/myprofile')}
          />
        </li>
      </ul>

      <div className='text-center font-bold text-5xl py-8'>PROFILE</div>
      <form className='text-center text-2xl'>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          class="inline rounded-full w-64"
          alt="Avatar" onClick={() => navigate('/myprofile')}
        />
        <div className='py-5 spacing'>
          <p className='py-3'>Username: John Clark</p> 
          <p className='py-3'>Email: johnc@gmail.com</p>
          <p className='py-3'>Contact No: 011-34323134</p>
          <p className='py-3'>Password: *********</p>
        </div>
      </form>
    </div>
  )
}