import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import map from '../../resources/enugu_map.png';
import coalcity from '../../resources/coalcity.png';
import Loader from "../Loader";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {

  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        navigate('/login');
      }
    })
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <main>
      {userDetails ? (
        <>
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
      <div>
      <div className="flex flex-col mt-20">
        <div className="">
          <h1 className="text-green-600 font-semibold text-left text-4xl mb-4 xsm-max:text-xl">{userDetails.firstName}</h1>
          <div className="flex gap-10 sm-max:flex sm-max:flex-col">
            <div className="flex-1">
              <div className="bg-green-600 p-16 rounded-lg text-white flex flex-col items-start">
                <p className="text-3xl font-semibold">Apply for </p>
                <p className="text-3xl font-semibold text-left">Card</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-green-600 p-16 rounded-lg text-white flex flex-col items-start">
                <p className="text-3xl font-semibold">Track </p>
                <p className="text-3xl font-semibold text-left">Appplication</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-green-600 p-16 rounded-lg text-white flex flex-col items-start">
                <p className="text-3xl font-semibold">Card </p>
                <p className="text-3xl font-semibold text-left">Status</p>
              </div>
            </div>
            
          </div>
          <div className="text-center mt-10">
            <img src={coalcity} alt="" className="inline-block" />
          </div>
        </div>
      </div>
    </div>
        </>
      ) : <Loader/> }

    </main>
  );
};

export default Dashboard;
