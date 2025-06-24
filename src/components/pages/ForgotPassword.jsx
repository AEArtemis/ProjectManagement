import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    if (!email) return alert("Please enter an email");
    console.log("Send OTP to", email);
    setStep(2);
  };

  const handleOTPSubmit = () => {
    if (!otp) return alert("Please enter OTP");
    console.log("OTP entered:", otp);
    setStep(3);
  };

  const handlePasswordReset = () => {
    if (!newPassword || !confirmPassword) return alert("Please fill all fields");
    if (newPassword !== confirmPassword) return alert("Passwords do not match");
    console.log("Password reset for:", email);
    navigate("/");
  };

  const handleBack = () => {
    if (step === 1) {
      navigate(-1); 
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f6f2f3] flex items-center justify-center p-4">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full h-[520px]">
        <div className="relative w-full md:w-1/2 p-10 flex flex-col justify-center">
            <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="absolute top-4 left-4 flex items-center gap-1 text-gray-400 hover:text-gray-600"
            >
            <ArrowLeft className="w-4 h-4" />
            Back
            </Button>

          <h2 className="text-3xl font-bold text-[#7a6650] mb-1">Forgot Password</h2>
          <p className="italic text-lg text-[#7a6650] mb-6">to Planora</p>

          {step === 1 && (
            <>
              <div className="mb-4">
                <Label htmlFor="email" className="text-gray-400 pb-2">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black mt-1"
                />
              </div>
              <Button
                className="w-full bg-[#7a6650] hover:bg-[#6a5744] text-white"
                onClick={handleEmailSubmit}
              >
                Send OTP
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-4">
                <Label htmlFor="otp" className="text-gray-400 pb-2">OTP</Label>
                <Input
                  type="text"
                  id="otp"
                  placeholder="Enter the code sent to your email"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-black mt-1"
                />
              </div>
              <Button
                className="w-full bg-[#7a6650] hover:bg-[#6a5744] text-white"
                onClick={handleOTPSubmit}
              >
                Verify OTP
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              <div className="mb-4">
                <Label htmlFor="newPassword" className="text-gray-400 pb-2">New Password</Label>
                <Input
                  type="password"
                  id="newPassword"
                  placeholder="********"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="text-black mt-1"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="confirmPassword" className="text-gray-400">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-black mt-1"
                />
              </div>
              <Button
                className="w-full bg-[#7a6650] hover:bg-[#6a5744] text-white"
                onClick={handlePasswordReset}
              >
                Reset Password
              </Button>
            </>
          )}

          {/* <p className="text-center text-xs text-gray-400 mt-6">© 2025</p> */}
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
