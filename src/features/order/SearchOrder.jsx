import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [orderNumber, setorderNumber] = useState("");
    const navigate = useNavigate();
    return (
       <form onSubmit={(e)=>{
        e.preventDefault();
        if(!orderNumber)return;
        navigate(`order/${orderNumber}`);
       }}>
         <input placeholder="Search Order Number" className="rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 focus:w-72 sm:w-64" value={orderNumber} onChange={(E)=>{setorderNumber(E.target.value);}}></input>
       </form>
    )
}

export default SearchOrder
