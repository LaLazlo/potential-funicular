import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
  <div className="container py-4 mx-auto my-auto lg:flex mt-28">
    <div className="flex flex-col items-center w-full lg:flex-row">
      <div className="max-w-lg">
        <h1 className="tracking-wide text-gray-800 text-4xl">Discover Meaningful Opportunities with <strong>
          Opportuna Find rewarding experiences and job openings effortlessly!</strong>
        </h1>
          <p className="mt-4 text-gray-300 text-gray-600">Explore a new world of volunteering and job opportunities with Your App Name. 
          Streamline your search, apply with ease, and embark on a journey of personal and professional growth. 
          Start shaping your future today with the power of opportunities!
          </p>
        <div className="mt-6 mb-2">
          <Link to="/about" className="inline-block px-3 py-2 font-semibold text-center text-slate-500 bg-slate-200 rounded-full">
            Discover
          </Link>
        </div>
      </div>
    </div>
        <div className="flex items-center justify-center w-full mt-2 lg:h-96">
      <img className="object-cover w-full max-w-2xl rounded-md lg:h-full"
        src="https://tamwilcom.ma/sites/default/files/slider/1949.png" alt="" />
    </div>
  </div>
  )
}
