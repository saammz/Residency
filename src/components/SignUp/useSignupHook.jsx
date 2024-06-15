import { useState } from 'react';
import { auth, db } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const useSignupHook = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      const user = auth.currentUser;
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
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Weak password');
      } else {
        toast.error(error.message);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    showPassword,
    showConfirmPassword,
    handleChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    loading,
    setLoading,
    handleSubmit,
  };
};

export default useSignupHook;
