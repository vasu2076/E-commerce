import { FaRegWindowMinimize } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '@mui/material/Button';  
import { useState } from "react";

 const Quantitybox = () =>{

    const [inputval , setinputval]  =useState(1)
    const minus = ()=>{
        if(inputval>1){
            setinputval(inputval-1)
        }
        // setinputval(inputval -1)
    }
    const plus = ()=>{
        setinputval(inputval + 1)
    }

    return(
        <>
        <div className='quantitydrop d-flex align-items-center'>
        <Button onClick={minus}><FaRegWindowMinimize/></Button>
        {/* <span>0</span> */}
        <input type='text' value={inputval}/>
        <Button onClick={plus}><FaPlus/></Button>
    </div>
    </>
    )
 }

 export default Quantitybox