import React from 'react'

function SignUpCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
            />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
            />
        </div>
        <button
          type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
            Sign Up
            </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
        </div>
        
  )
}

export default SignUpCard