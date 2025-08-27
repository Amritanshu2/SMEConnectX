import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');  

const handleSubmit = (e) => {
    e.preventDefault();
}

    return (
        <div className='bg-emerald-100 min-h-screen flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg h-800 w-full max-w-md'>
                <h2 className="text-2xl font-bold text-emerald-600 hover:text-teal-600 text-center transition-colors duration-300">
                    Login
                </h2>

                <form className='space-y-4'>
                    <div>
                        <label className='block text-gray-700 mb-1' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className='w-full p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-gray-800 focus:outline-none focus:border-teal-500'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 mb-1' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className='w-full p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-gray-800 focus:outline-none focus:border-teal-500'
                            placeholder='Enter your password'
                        />
                    </div>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200'
                    >
                        Login
                    </button>
                    
                    <Link to="/register" className='text-teal-500 hover:text-teal-600 transition duration-200 hover:underline'>
                        Create an account
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
