import { RingLoader } from "react-spinners";

import './SpinnerLoader.css'

export const SpinnerLoader = ()=>{

    return(
        <div className="loader-container">

            <RingLoader color="#0d11c6" size={96} />
        </div>
    )
}