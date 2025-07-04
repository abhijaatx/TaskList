import React from "react";
import { useState, useEffect } from "react";


const LoginForm = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        localStorage.setItem('username', username);
        setUsername("");
        window.location.href = '/todolist';
    };

    return (
        <>
            <div className="flex inset-0 fixed w-screen h-screen bg-gradient-to-br from-blue-100 to-white items-center justify-center  ">
                {/* <div className="absolute inset-0 overflow-hidden ">
                    {[...Array(76)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-black/20 rounded-full animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div> */}
                <div className="border-white border-2 h-3/4 w-auto min-h-64 p-16 justify-center flex flex-col items-center space-y-4 z-20 bg-gradient-to-br from-blue-100 to-white rounded-2xl">
                    <div className="mx-auto w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9.993 9.993 0 0012 20c2.485 0 4.757-.905 6.879-2.396M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold  text-center">
                        <h2 className="text-2xl font-bold text-gray-800 items-center">Welcome Back!</h2>
                        <p className="text-gray-500">Enter your username to continue</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div w-64 border-white-500 h-64 >
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                className="w-full pl-4 pr-10 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                name="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />

                        </div>
                        <button
                            type="submit"
                            className="w-64 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>


        </>
    );
}


export default LoginForm;