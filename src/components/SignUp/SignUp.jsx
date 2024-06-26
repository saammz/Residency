import React, { useState } from 'react';
import pana from '../../resources/pana.png'
import map from '../../resources/enugu_map.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    nin: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      const user = auth.currentUser;
      console.log(user);
      toast.success('Registration successful')
      if(user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          nin: formData.nin,
        });
      };
    navigate("/login");
    } catch (error) {
      console.log(error.message);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use');
      } else {
        toast.error(error.message);
      }
      
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="container relative mx-auto max-w-md p-6 bg-white mt-[5rem]">
        <div className='absolute top-[-6rem] w-[200px] h-[120px] left-1/2 transform -translate-x-1/2'>
        <Link to="/">
          <img src={map} alt="" className='w-full h-full object-cover' />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">Middle Name</label>
            <input
              type="text"
              name="middleName"
              placeholder="Enter your middle name"
              value={formData.middleName}
              onChange={handleChange}
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="Phone Number" className="block text-left mb-1 pl-6">Password</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-1 pl-6">National Identity Number</label>
            <input
              type="text"
              name="nin"
              placeholder="Enter your NIN"
              value={formData.nin}
              onChange={handleChange}
              required
              className="input-field text-center bg-white border-[1px] border-green-500 w-full py-2 px-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button type="submit" className="btn btn-primary animate-pulse bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full w-1/2">{isLoading ? <Spinner /> : 'Sign up'}</button>
        </form>
        <p className="mt-3 text-center text-gray-600">Already have an account? <Link to={"/login"}>
        <span className="text-green-500">Login Here</span>
        </Link> </p>

        <div className='w-full my-4'>
          <img src={pana} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
