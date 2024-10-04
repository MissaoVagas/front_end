import Navbar from "../components/Navbar"
import "./Login.css"
import Footer from "../components/Footer"

function Login() {
    return (
        <div>
            <Navbar />
            <div className="Login">
                <div className="rocket"></div>
                <div class="flex-grow flex items-center justify-center">
                    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 class="text-3xl font-semibold mb-6 text-center">Login to Your Account</h2>
                        <form>
                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium text-gray-300">Email
                                    <input type="email" id="email" class="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email" required />
                                </label>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block text-sm font-medium text-gray-300">Password
                                    <input type="password" id="password" class="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your password" required />
                                </label>
                            </div>
                            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded">Login</button>
                            <div class="flex justify-between items-center mt-4 text-sm text-gray-400">
                                <label><input type="checkbox" class="mr-2" /> Remember me</label>
                                <a href="#" class="hover:text-indigo-400">Forgot password?</a>
                            </div>
                        </form>
                        <div class="mt-6 text-center">
                            <span class="text-gray-400">Don't have an account? </span>
                            <a href="#" class="text-indigo-400 hover:underline">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login