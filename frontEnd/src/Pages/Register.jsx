import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registered:', { email, role, password });
    };


  return (
    <div className='bg-emerald-100 min-h-screen flex items-center justify-center'>
  <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
    <h2 className="text-2xl font-bold text-emerald-600 hover:text-teal-600 text-center transition-colors duration-300">
      Register
    </h2>
    <form className='space-y-4'>

      {/* Email */}
      <div>
        <label className='block text-gray-700 mb-1' htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className='w-full p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-gray-800 focus:outline-none focus:border-teal-500'
          placeholder='Enter your email'
        />
      </div>

      {/* Role Dropdown */}
      <div>
        <label className='block text-gray-700 mb-1' htmlFor='role'>Role</label>
        <select
          id='role'
          value={role}
          onChange={(e)=>{setRole(e.target.value)}}
          className='w-full p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-gray-800 focus:outline-none focus:border-teal-500'
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Password */}
      <div>
        <label className='block text-gray-700 mb-1' htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value = {password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='w-full p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-gray-800 focus:outline-none focus:border-teal-500'
          placeholder='Enter your password'
        />
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        onClick={handleSubmit}
        className='w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200'
      >
        Register
      </button>
      <Link to="/login" className='text-teal-500 hover:text-teal-600 transition duration-200 hover:underline'>
        Already have an account? Login
      </Link>
    </form>
  </div>
</div>

  );
}

export default Register;
