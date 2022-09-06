import React from 'react';
import '../index.css';

import { useNavigate } from 'react-router-dom';

import gambar from '../img/academic-building.png'

export const Main = () => {
    let navigate = useNavigate();

    return (
        <div className="App">
            <ul className="flex border-b bg-purple-200">
                <li className="-mb-px mr-1">
                    <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl" href="#">College Facilities Booking System</a>
                </li>
                <li className="ml-1">
                    <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl hover:bg-purple-500 hover:text-white" href="#">Home</a>
                </li>
            </ul>

            <img className='w-screen opacity-80' src={gambar} />

            <div className='flex justify-center'>
                <button className='border-2 py-3 px-4 text-white font-bold bg-purple-700 rounded-2xl hover:bg-purple-500' onClick={() => navigate('/login')}>Login</button>&nbsp;
                <button className='border-2 py-3 px-4 text-white font-bold bg-purple-700 rounded-2xl hover:bg-purple-500'>Sign Up</button>
            </div>

            <div className='font-bold text-5xl py-8 text-center'>FACILITIES</div>

            <div className='flex justify-center'>
                <div class="inline-flex justify-center py-5 px-5">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Pantry</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Each college consists of a pantry where students are able to cook or kept the necessary items there.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">View</button>
                        </div>
                    </div>
                </div>

                <div class="inline-flex justify-center py-5 px-5">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Gymnasium</h5>
                            <p class="text-gray-700 text-base mb-4">
                                The location is below Zamrud college. Students can freely use all the equipment for exercises purposes.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">View</button>
                        </div>
                    </div>
                </div>

                <div class="inline-flex justify-center py-5 px-5">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Bicycle</h5>
                            <p class="text-gray-700 text-base mb-4">
                                The location is below Zamrud college. Students can freely use the bicycle afterbooking. The suitable time to book around 4pm to 5.30pm.
                            </p>
                            <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">View</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center font-bold text-5xl py-8'>JPK IN CHARGE</div>
            
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
                                                    Date
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Facility
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Managed By
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    College
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Contact No
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    9/10/22
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Bicycle
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    JPK Wawa
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    ZAM 116C
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    011-3334445
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    9/10/22
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Gymnasium
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    JPK Fira
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    ZAM 116C
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    011-3334445
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    9/10/22
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Pantry - Intan
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    JPK Putri
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    INT 205A
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    011-3334445
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

            <div className='py-5'></div>

            <div className='text-center object-bottom bg-purple-200 py-5'>Created By Ain Farrhana @2022</div>
        </div>
    )
}