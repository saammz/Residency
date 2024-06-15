import { useState } from 'react';

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
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
  };
};

export default useLoginForm;
