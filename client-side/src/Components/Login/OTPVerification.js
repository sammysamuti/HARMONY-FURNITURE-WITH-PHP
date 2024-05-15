import React, { useState } from "react";
import "./otp.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function OTPVerification({ email, setVerify }) {
  const [otp, setOTP] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      formData.append("email", email);
      const responseMessage = await fetch("http://localhost/PHP/verify.php", {
        method: "POST",
        body: formData,
      });

      const data = await responseMessage.json();

      if (data.status === "success") {
        setResponseMessage(data);
        setError("");
        setVerify(false);
        navigate("/");
      } else {
        setResponseMessage(data);
        setError("Error: OTP verification failed.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResponseMessage("Error: Failed to fetch data");
      setError(error.message);
    }
  };

  const handleOTPChange = (e) => {
    const enteredOTP = e.target.value;
    // console.log("Entered OTP:", enteredOTP);
    setOTP(enteredOTP);
  };

  return (
    <div>
      <div className="con">
        <h1 className="introo">OTP Verification</h1>
        <form onSubmit={handleSubmit} className="otp-forming">
          <input type="text" name="email" className="hideemail" />
          <input
            className="inputField"
            type="text"
            name="otp"
            placeholder="Enter OTP code"
            value={otp}
            onChange={handleOTPChange}
            required
          />

          <button className="submitButtonss" type="submit">
            Register
          </button>
        </form>
        <div className="responsess">
          {responseMessage && (
            <p
              className={
                responseMessage.status === "error" ? "error-box" : "success-box"
              }
            >
              {responseMessage.message}
            </p>
          )}
          {error && (
            <p className={"error" ? "error-box" : "success-box"}>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
