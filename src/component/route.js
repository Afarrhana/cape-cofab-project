import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './main';
import { Login } from './login';
import { Homepage } from './homepage';
import { MyBooking } from './mybooking';
import { MyHistory } from './myhistory';
import { MyProfile } from './myprofile';
import { Bicycle } from './facilities/bicycle';
import { Gymnasium } from './facilities/gymnasium';
import { Pantry } from './facilities/pantry';

const routes = (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/mybooking" element={<MyBooking/>} />
        <Route path="/myhistory" element={<MyHistory/>} />
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/pantry" element={<Pantry/>} />
        <Route path="/gymnasium" element={<Gymnasium/>} />
        <Route path="/bicycle" element={<Bicycle/>} />
    </Routes>
)
export default routes