import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { GoEyeClosed, GoEye } from 'react-icons/go';
import useSignupHook from './useSignupHook';
import pana from '../../resources/pana.png';
import map from '../../resources/enugu_map.png';
import Spinner from '../../components/Spinner/Spinner';

const SignUp = () => {
  const {
    formData,
    showPassword,
    showConfirmPassword,
    handleChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    loading,
    setLoading
  } = useSignupHook();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/login");
  };


  return (
    <div className="flex items-center justify-center h-full">
      <div className="container relative mx-auto max-w-md p-6 bg-white rounded-lg shadow mt-8">
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
          <Link to="/">
            <img src={map} alt="" className='w-32 h-20 object-cover' />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="mb-4">
            <label htmlFor="username" className="block text-left mb-1 pl-2 text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-left mb-1 pl-2 text-gray-600">
              Password
            </label>
            <div className="input-group relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <span className="absolute right-2 top-[32%] transform -translate-x-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <GoEye />
                ) : (
                  <GoEyeClosed />
                )}
              </span>
            </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="confirmPassword" className="block text-left mb-1 pl-2 text-gray-600">
              Confirm Password
            </label>
            <div className="input-group relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <span className="absolute right-2 top-[32%] transform -translate-x-1/2 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? (
                  <GoEye />
                ) : (
                  <GoEyeClosed />
                )}
              </span>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-left mb-1 pl-2 text-gray-600">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="middleName" className="block text-left mb-1 pl-2 text-gray-600">Middle Name</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Enter your middle name"
              value={formData.middleName}
              onChange={handleChange}
              className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-left mb-1 pl-2 text-gray-600">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-left mb-1 pl-2 text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nin" className="block text-left mb-1 pl-2 text-gray-600">National Identity Number (NIN)</label>
            <input
              type="text"
              id="nin"
              name="nin"
              placeholder="Enter your NIN"
              value={formData.nin}
              onChange={handleChange}
              required
              className="input-field bg-white border-2 border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-semibold py-5 px-4 rounded-full w-full relative"
            disabled={loading}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {loading && <Spinner />}
            {loading ? "" : "Sign In"}
            </span>
          </button>
        </form>
        <p className="mt-3 text-center text-gray-600">Already have an account? <Link to={"/login"} className="text-green-500">Login Here</Link></p>

        <div className='w-full my-4'>
          <img src={pana} alt="illustration" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
