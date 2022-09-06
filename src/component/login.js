import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export const Login = () => {
  let navigate = useNavigate();

  return (
    <div>
      <ul className="flex border-b bg-purple-200">
        <li className="-mb-px mr-1">
          <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl" href="#">College Facilities Booking System</a>
        </li>
        <li className="ml-1">
          <a className="inline-block py-4 px-4 text-purple-700 font-bold text-2xl hover:bg-purple-500 hover:text-white" onClick={() => navigate('/')}>Home</a>
        </li>
      </ul>

      <section class="h-screen">
        <div class="m-20 text-gray-800">
          <div
            class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="xl:ml-20 mb-12 md:mb-0">
              <form className='block p-6 rounded-lg shadow-lg bg-purple-200 max-w-sm'>
                <h5 class="text-center text-gray-900 text-xl leading-tight font-medium mb-2">Logo</h5>

                <img class="rounded py-4" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />

                <div class="flex items-center justify-center">
                  <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <a
                      href="#"
                      aria-current="page"
                      class="
        rounded-l
        px-6
        py-2.5
        bg-purple-800
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-purple-700
        focus:bg-purple-700 focus:outline-none focus:ring-0
        active:bg-purple-800
        transition
        duration-150
        ease-in-out
      "
                    >Login
                    </a>
                    <a
                      href="#"
                      class="
        px-6
        py-2.5
        bg-purple-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-purple-700
        focus:bg-purple-700 focus:outline-none focus:ring-0
        active:bg-purple-800
        transition
        duration-150
        ease-in-out
      "
                    >Sign Up
                    </a>
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <label for="exampleEmail0" class="form-label inline-block mb-2 text-gray-700">Email</label>
                    <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal 
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="exampleEmail0" placeholder="Insert Email" />
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <label for="exampleEmail0" class="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal 
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="exampleEmail0" placeholder="Insert Password" />
                  </div>
                </div>

                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2" />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                  </div>
                  <a href="#!" class="text-gray-800">Forgot password?</a>
                </div>

                <div className='flex items-center justify-center '>
                  <div class="text-center lg:text-left">
                    <div className='flex justify-center'>
                    <button type="button" class="m-0 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => navigate('/homepage')}>Login</button>

                    </div>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <a
                        href="#!"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}