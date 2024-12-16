/* "use client"
import Timer from "@/component/Timer";
import {useState} from 'react'



function Reservation() {
    const[step, setStep] = useState(1)
    return (<div>
<Timer/>
{step === 1 &&(
    <div>
        <h1>Step 1</h1>
        <button onClick={()=>setStep(2)}>Next</button>
    </div></div> )}
    )}
 
export default Reservation; */