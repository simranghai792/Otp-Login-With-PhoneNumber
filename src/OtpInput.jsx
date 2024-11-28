import { useEffect,useRef,useState } from "react";

export default function OtpInput({length=4,onOtpSubmit = () => { }}) {
    let [otp,setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);
    
    // console.log(otp);

    useEffect(() => {
      if(inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    },[]);

    let handleChange = (index,e) => {
      const value = e.target.value;
      if(isNaN(value)) return;

      const newOtp = [...otp];

      //allow only one input
      newOtp[index] = value.substring(value.length-1);
      setOtp(newOtp);

      //submit triggers
      const combinedOtp = newOtp.join("");
      if(combinedOtp.length===length){
        onOtpSubmit(combinedOtp);
      }

      if(value && index<length-1 && inputRefs.current[index+1]){
           inputRefs.current[index+1].focus();
      }
    };

    // let handleClick = () => {}
    // let handleKeyDown = () => {}

    return(
        <>
         {
            otp.map((value,index) => {
              return (
              <input 
              key={index}  
              type="text" 
              ref = {(input) => (inputRefs.current[index] = input)}
              value={value} 
              onChange= {(e) => handleChange(index,e)} 
              // onClick={() => handleClick(index)}
              // onKeyDown = {(e) => handleKeyDown(index,e)} 
              className="otpInput"
              />
              )
            })
         }
        </>
    );
}