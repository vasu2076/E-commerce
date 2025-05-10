import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const searchBox=()=>{
return(
    <div className='headersearch ml-3 mr-3'>
    <input type='text' placeholder='Search for products..'></input>
   <Button><FaSearch /></Button> 
</div>
)
}

export default searchBox