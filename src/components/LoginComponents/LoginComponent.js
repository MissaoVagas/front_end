import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./LoginComponent.css"

function LoginComponent() {
    return (
        <div className="Login">
            <div className="rocket"></div>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Login to Your Account</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </label>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your password"
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded">
                            Login
                        </button>
                        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                            <label>
                                <input type="checkbox" className="mr-2" /> Remember me
                            </label>
                            <a href="#" className="hover:text-indigo-400">
                                Forgot password?
                            </a>
                        </div>
                    </form>

                    <div className="flex justify-between mt-6">
                        <button className="w-1/2 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mr-2">
                            <FaGoogle className="mr-2" /> <span>Google</span>
                        </button>
                        <button className="w-1/2 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded ml-2">
                            <FaFacebook className="mr-2" /> <span>Facebook</span>
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <span className="text-gray-400">Don't have an account? </span>
                        <a href="#" className="text-indigo-400 hover:underline">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;