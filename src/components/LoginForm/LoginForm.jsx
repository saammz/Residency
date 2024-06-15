import React from "react";
import { GoEyeClosed, GoEye } from 'react-icons/go';
import pana from "../../resources/pana.png";
import map from "../../resources/enugu_map.png";
import { Link, useNavigate } from "react-router-dom";
import useLoginForm from './useLoginForm';
import Spinner from '../../components/Spinner/Spinner';

const Login = () => {
  const {
    formData,
    showPassword,
    loading,
    handleChange,
    togglePasswordVisibility,
    setLoading,
    resetForm
  } = useLoginForm();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Assuming successful login, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="container relative mx-auto max-w-md p-6 bg-white rounded-lg shadow mt-8">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={map} alt="" className="w-32 h-20 object-cover" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="mb-4">
            <label htmlFor="username" className="block text-left mb-1 pl-2 text-gray-600">
              Username
            </label>
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
          <button
            type="submit"
            className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-semibold py-5 px-4 rounded-full w-full relative"
            disabled={loading}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {loading && <Spinner />}
            {loading ? "" : "Login"}
            </span>
          </button>
        </form>
        <p className="mt-3 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to={"/"} className="text-green-500">
            Sign Up Here
          </Link>
        </p>

        <div className="w-full mt-4">
          <img src={pana} alt="illustration" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
