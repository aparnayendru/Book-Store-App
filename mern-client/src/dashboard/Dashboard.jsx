import React, { useContext } from 'react';
import { AuthContext } from '../contacts/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="main-content p-4 md:p-8">
      <div className="header flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
          Demo Dashboard Development for the Book Inventory
        </h1>
        <div className="flex items-center">
          <div className="members-connected flex items-center mr-4">
            <span className="member-badge bg-blue-500 text-white rounded-full px-3 py-1 mr-1" aria-label="Member JC">JC</span>
            <span className="member-badge bg-blue-500 text-white rounded-full px-3 py-1" aria-label="Member JD">JD</span>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded" aria-label="Open Dashboard">Open</button>
        </div>
      </div>
      
      <div className="stats-tasks grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Stats Section */}
        <div className="stats p-6 bg-gray-100 rounded">
          <div className="mb-4">
            <p className="text-lg">Good day, <span className='text-blue-700 font-bold text-xl'>{user?.displayName || "Demo User"}</span></p>
            <button className="bg-green-600 text-white py-1 px-3 rounded mt-2">Start Tracking</button>
          </div>
          <div className="flex justify-between mt-6">
            <div>
              <p className="text-xl font-bold">20</p>
              <p>Tasks Finished</p>
            </div>
            <div>
              <p className="text-xl font-bold">5.5</p>
              <p>Tracked Hours</p>
            </div>
          </div>
          <div className="mt-6">
            <p>Your Daily Plan</p>
            <p className="text-lg font-bold">5 of 8 Completed</p>
          </div>
        </div>
        
        {/* Tasks Section */}
        <div className="tasks p-6 bg-gray-100 rounded">
          <h2 className="text-lg mb-4">Your Tasks Today</h2>
          <ul>
            <li className="mb-4">
              <div className="task-item">
                <p className="font-bold">Blog and Social Posts</p>
                <p className="text-gray-600">Deadline is Today</p>
              </div>
            </li>
            <li className="mb-4">
              <div className="task-item">
                <p className="font-bold">New Campaign Review</p>
                <p className="text-gray-600">New Feedback</p>
              </div>
            </li>
            <li>
              <div className="task-item">
                <p className="font-bold">Cross-Platform and Browser QA</p>
                <p className="text-gray-600">2h</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
