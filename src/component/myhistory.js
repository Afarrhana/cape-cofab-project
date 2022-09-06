import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export const MyHistory = () => {
    let navigate = useNavigate();

    return(
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

      <div className='text-center font-bold text-5xl py-8'>MY HISTORY</div>

      <div className='flex justify-center'>
        <div className='w-4/5 inline-block'>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full shadow-xl">
                    <thead class="bg-purple-300 border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          First
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Last
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Mark
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Otto
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Jacob
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Thornton
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Larry
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Wild
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}