import axios from 'axios';
import React, { useState } from 'react';
import { RiAccountBoxLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';


const Signup= () => {
    const [name, setName] = useState('');
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('All fields are required!');
      return;
    }
    

    // Simulate user signup (In real-world use, call API)
    const userData = { email, password };
    await axios.post('https://fruit-ai-3.onrender.com/signin', userData)
        .then((res) => {
            console.log(res.data);
            navigate('/home');

        })
        .catch((err) => {
            console.error(err);
        });
      }
    



  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!name || !email || !password) {
      alert('All fields are required!');
      return;
    }
    

    // Simulate user signup (In real-world use, call API)
    const userData = { name, email, password };
    await axios.post('https://fruit-ai-3.onrender.com/signup', userData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    // Store user data in localStorage to simulate being signed up
    // localStorage.setItem('user', JSON.stringify(userData));

    // Call the onSignup function to notify the parent
    // onSignup();
  };
//   const history = useHistory();

//   useEffect(() => {
//     // Check if user is already signed up
//     const user = localStorage.getItem('user');
    
//     if (user) {
//       // Redirect to home if user is signed up
//       history.push('/home');
//     }
//   }, [history]);

  // Function to call after sign up
//   const handleSignup = () => {
//     history.push('/home');
//   };

  return (
    
    //   <div className="signup-container">
    //   <h2>Sign Up</h2>
    //   <form onSubmit={handleSignup}>
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
    <div className="min-h-screen h-full w-full flex flex-col items-center justify-center bg-gray-100">
    <div className="w-full h-[100vh] flex flex-col max-w-s p-6 justify-center bg-white  sm:max-w-sm">
      <h2 className="text-center text-2xl  font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      <p className="text-center text-sm mb-4">
        By signing in you are agreeing to our{' '}
        <a href="/terms" className="text-blue-600 underline">
          Terms and privacy policy
        </a>
      </p>

     
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`pb-1 ${isLogin ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`pb-1 ${!isLogin ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        >
          Register
        </button>
      </div>

      {/* Form */}
      <form >
        {/* Email Input */}
       { !isLogin ? (<div className="relative mb-4">
        <RiAccountBoxLine className="absolute left-2 top-3 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="w-full pl-10 pr-2 py-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>):null}
        <div className="relative mb-4">
          <FiMail className="absolute left-2 top-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full pl-10 pr-2 py-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <FiLock className="absolute left-2 top-3 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-2 py-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
          <span className="absolute right-2 top-3 text-gray-400 cursor-pointer">👁</span>
        </div>

        {/* Remember me & Forgot password (only for login) */}
        {isLogin && (
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label>Remember password</label>
            </div>
            <a href="/forgot-password" className="text-blue-600 underline">
              Forgot password
            </a>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          
          onClick={(e) => isLogin ? handleLogin(e) : handleSignup(e)}
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      {/* Or connect with */}
      <p className="text-center mt-6 mb-4 text-gray-500 text-sm">or connect with</p>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="text-blue-700 hover:text-blue-900">
          <FaFacebookF size={24} />
        </button>
        <button className="text-pink-500 hover:text-pink-700">
          <FaInstagram size={24} />
        </button>
        <button className="text-red-600 hover:text-red-800">
          <FaPinterestP size={24} />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <FaLinkedinIn size={24} />
        </button>
      </div>

      {/* Fingerprint Icon */}
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/102/102649.png" // Replace with the fingerprint icon image
          alt="Fingerprint Login"
          className="w-12 h-12"
        />
      </div>
    </div>
  </div>
   
  );
};

export default Signup;
