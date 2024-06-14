import React from 'react'
import coalcity from '../../resources/coalcity.png';
const DashCards = () => {
  return (
    <div>
      <div className="flex flex-col mt-20">
        <div className="">
          <h1 className="text-green-600 font-semibold text-left text-4xl mb-4 xsm-max:text-xl">Welcome Jonah</h1>
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
  )
}

export default DashCards
