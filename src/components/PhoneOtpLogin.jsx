import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOTPInput, setShowOTPInput] = useState(false);
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Please enter a valid phone number");
            return;
        }
        // call BE API to send OTP
        // Show OTP form
        setShowOTPInput(true);
    };
    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
    };
    return (
        <div>
            {!showOTPInput ? (
                <form onSubmit={handlePhoneSubmit}>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        placeholder="Enter phone number"
                    />
                    <button type="submit">Send OTP</button>
                </form>
            ) : (
                <div>
                    <p>Enter OTP Sent to {phoneNumber}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            )}
        </div>
    );
};

export default PhoneOtpForm;
