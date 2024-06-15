import React, { useState } from "react";
import pana from "../../resources/pana.png";
import map from "../../resources/enugu_map.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      toast.success('User logged in successfully');
      // navigate("/dashboard");
      window.location.href = '/dashboard';
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="container relative mx-auto max-w-md p-6 bg-white mt-[5rem]">
        <div className="absolute top-[-6rem] w-[200px] h-[120px] left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={map} alt="" className="w-full h-full object-cover" />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left mb-1 pl-6">
              Email
            </label>
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
            <label htmlFor="password" className="block text-left mb-1 pl-6">
              Password
            </label>
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
          <button
            type="submit"
            className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full w-1/2 relative"
            disabled={loading}
          >
            {loading ? <Spinner/> : "Login"}
          </button>
        </form>
        <p className="mt-3 text-center text-gray-600">
          Already have an account?{" "}
          <Link to={"/"}>
            <span className="text-green-500">SignUp Here</span>
          </Link>{" "}
        </p>

        <div className="w-full my-4">
          <img src={pana} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
