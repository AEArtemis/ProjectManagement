import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen w-full bg-[#f6f2f3] flex items-center justify-center p-4">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full h-[500px]">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#7a6650]">Welcome</h2>
          <p className="italic text-lg text-[#7a6650] mb-4">to Planora</p>
          <Link to="/signup">
            <p className="text-sm mb-4 text-gray-400">
              Don't have an account?{" "}
              <span className="text-pink-700 font-semibold cursor-pointer">Sign Up</span>
            </p>
          </Link>
          <div className="mb-4">
            <Label htmlFor="email" className="text-gray-400">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" className="text-black mt-1" />
          </div>

          <div className="mb-2">
            <Label htmlFor="password" className="text-gray-400">Password</Label>
            <Input type="password" id="password" placeholder="********" className="text-black mt-1" />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-gray-400">Remember me</Label>
            </div>
            <Link to="/forgot-password" className="text-sm text-gray-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button className="w-full bg-[#7a6650] hover:bg-[#6a5744] text-white cursor-pointer"  onClick={handleLogin}>Sign In</Button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
            <FcGoogle size={20} />
            <span className="text-gray-400">Sign in with Google</span>
          </Button> */}
          <div className="flex space-x-4 item-center justify-center">
            <button className="w-10 h-10 rounded-full overflow-hidden border hover:opacity-80 cursor-pointer">
              <img src="/images/icons/IconGoogle.png" alt="Google" className="w-full h-full object-cover" />
            </button>

            <button className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 cursor-pointer">
              <img src="/images/icons/IconFacebook.png" alt="Facebook" className="w-full h-full object-cover" />
            </button>

            <button className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 cursor-pointer">
              <img src="/images/icons/IconGithub.png" alt="GitHub" className="w-full h-full object-cover" />
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">© 2025</p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 bg-[#f6f2f3] flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/b0/a2/6b/b0a26b4fd03adfa98d9aff5952b582f7.jpg"
            alt="Planora Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
