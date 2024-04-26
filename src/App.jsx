import { useState } from "react";
import "./App.css";
import PhoneOtpForm from "./components/PhoneOtpLogin";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Login with phone</h1>
            <PhoneOtpForm />
        </div>
    );
}

export default App;
