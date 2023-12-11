import React from 'react'
import { useSelector } from 'react-redux';


export default function Explore() {
    const { currentUser, loading, error } = useSelector((state) => state.user);

  return (
    <div className="flex justify-center items-center h-screen">
    {currentUser ? (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser.userType === 'Individual' ? 'Individual' : 'Organization'} User!</h2>
        <div className="flex">
          {currentUser.userType === 'Individual' && (
            <div className="bg-blue-200 p-4 rounded-md mr-4">
              <h3 className="text-xl font-bold mb-2">Volunteering Opportunities</h3>
              <p>Explore and apply for volunteering opportunities tailored for you.</p>
            </div>
          )}
          {currentUser.userType === 'Individual' && (
            <div className="bg-green-200 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2">Job Opportunities</h3>
              <p>Discover job openings that match your skills and career goals.</p>
            </div>
          )}
        </div>
        {currentUser.userType === 'Organization' && (
          <div className="bg-yellow-200 p-4 rounded-md mt-4">
            <h3 className="text-xl font-bold mb-2">Your Organization Dashboard</h3>
            <p>Manage and post volunteering opportunities and job openings for your organization.</p>
          </div>
        )}
      </div>
    ) : (
      <p>Loading...</p>
    )}
    {error && <p>An error occurred: {error}</p>}
  </div>
  )
}


