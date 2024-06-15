import React from "react";
import { Link } from "react-router-dom";
import map from '../../resources/enugu_map.png';

const Dashboard = () => {
  return (
    <main>
      <div className="">
        <header className="flex items-start justify-between sm-max:flex sm-max:flex-col">
          <div className="relative flex ml-[4.5rem] sm-max:ml-[4rem]">
            <div className="absolute w-[200px] h-[120px] left-[-10rem] top-[-1rem] sm-max:w-[150px] sm-max:left-[-7.5rem] sm-max:top-[-2rem]">
              <Link to="/">
                <img src={map} alt="" className="w-full h-full object-cover" />
              </Link>
            </div>
            <div className="text-left">
              <h1 className="text-3xl text-gray-400 sm-max:text-xl">Residency Card</h1>
              <p className="text-5xl text-gray-400 font-semibold sm-max:text-3xl">Dashboard</p>
            </div>
          </div>

          <nav className="sm-max:mt-5">
            <ul className="flex flex-col items-end gap-1 sm-max:flex sm-max:items-start">
              <li className="text-green-700 transition duration-300 ease-in-out hover:font-semibold hover:text-green-900">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="text-green-700 transition duration-300 ease-in-out hover:font-semibold hover:text-green-900">
                <Link to="/">Apply for Card</Link>
              </li>
              <li className="text-green-700 transition duration-300 ease-in-out hover:font-semibold hover:text-green-900">
                <Link to="/">Track Application</Link>
              </li>
              <li className="text-green-700 transition duration-300 ease-in-out hover:font-semibold hover:text-green-900">
                <Link to="/">Card Status</Link>
              </li>
            </ul>
            <button
              type="submit"
              className="btn btn-primary animate-pulse bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full w-full mt-1 transition duration-300 ease-in-out"
            >
              Update Information
            </button>
          </nav>
        </header>
      </div>
    </main>
  );
};

export default Dashboard;
