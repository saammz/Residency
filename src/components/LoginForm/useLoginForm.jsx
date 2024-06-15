import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      window.location.href = '/dashboard';
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  };

  const resetForm = () => {
    setFormData({
      username: '',
      password: '',
    });
  };

  return {
    formData,
    showPassword,
    loading,
    handleChange,
    togglePasswordVisibility,
    setLoading,
    resetForm,
    handleSubmit,
  };
};

export default useLoginForm;
