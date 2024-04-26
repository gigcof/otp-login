import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRefs = useRef([]);
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (e, idx) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        // allow only one input
        newOtp[idx] = value.substring(value.length - 1);
        setOtp(newOtp);
        // submit trigger
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
        // move to next input if current input is filled
        if (value && idx < length - 1 && inputRefs.current[idx + 1]) {
            inputRefs.current[idx + 1].focus();
        }
    };
    const handleClick = (idx) => {
        inputRefs.current[idx].setSelectionRange(1, 1);
        if (idx > 0 && !otp[idx - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };
    const handleKeyDown = (e, idx) => {
        if (e.key === "Backspace" && idx > 0 && !otp[idx]) {
            inputRefs.current[idx - 1].focus();
        }
    };
    return (
        <div>
            {otp.map((val, idx) => {
                return (
                    <input
                        key={idx}
                        type="text"
                        ref={(input) => {
                            inputRefs.current[idx] = input;
                        }}
                        value={val}
                        onChange={(e) => handleChange(e, idx)}
                        onClick={() => handleClick(idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="otpInput"
                    />
                );
            })}
        </div>
    );
};

export default OtpInput;
