import Navbar from "../components/Navbar";
import "./Login.css";
import Footer from "../components/Footer";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Importando os ícones

function Login() {
    return (
        <div>
            <Navbar />
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
                        
                        {/* Botões de login com Google e Facebook */}
                        <div className="flex flex-col space-y-4 mt-6">
                            <button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded flex justify-center items-center">
                                <FaGoogle className="mr-2" /> Login with Google
                            </button>
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded flex justify-center items-center">
                                <FaFacebook className="mr-2" /> Login with Facebook
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
            <Footer />
        </div>
    );
}

export default Login;