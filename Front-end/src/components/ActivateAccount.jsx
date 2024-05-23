import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActivateAccount() {
  const [activationCode, setActivationCode] = useState("");
  const navigate = useNavigate();

  const handleActivationCodeChange = (e) => {
    setActivationCode(e.target.value);
  };

  const activateAccount = async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/v1/auth/activate-account?token=${activationCode}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error("Activation failed:", errorData);
        alert("Activation failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    activateAccount();
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: 500 }}
      >
        <div className="w-full py-10 px-5">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">
              Activate Account
            </h1>
            <p>Enter your activation code to activate your account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex -mx-3 mb-5">
              <div className="w-full px-3">
                <label
                  htmlFor="activationCode"
                  className="text-xs font-semibold px-1"
                >
                  Activation Code
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-key-outline text-gray-400 text-lg" />
                  </div>
                  <input
                    type="text"
                    id="activationCode"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Enter activation code"
                    onChange={handleActivationCodeChange}
                    value={activationCode}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  type="submit"
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                >
                  Activate Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
