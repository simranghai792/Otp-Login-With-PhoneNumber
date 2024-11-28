import {useState} from "react";
import OtpInput from "./OtpInput.jsx";

export default function PhoneOtpForm(){

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    let handleChange = (event) => {
       setPhoneNumber(event.target.value);
    }

    let handleSubmit = (event) => {
       event.preventDefault();
    //    console.log(phoneNumber);

       //Phone Number validations
       const regex = /[^0-9]/g;
       if(phoneNumber.length<10 || regex.test(phoneNumber)){
        alert("Invalid Phone number");
        return;
       }

       //Call the API 
       setShowOtpInput(true);
    }

    let onOtpSubmit = (otp) => {
        console.log("Login Successfully",otp);
    }

    return(
        <>
          {!showOtpInput ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={phoneNumber} onChange={handleChange} placeholder="Enter phone number"/>
            <br></br>
            <button type="submit">Submit</button>
          </form>
          ) : (
            <div>
                <p>Enter OTP sent to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
            </div>
          )
        }
        </>
    );
}