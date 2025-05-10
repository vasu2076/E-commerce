import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa"; // fixed
import Dialog from '@mui/material/Dialog';
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import React from 'react';
import { mycontext } from '../../App';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const CountryDropdown = () => {

const [isOpenModal , setisOpenModal] = useState(false);
 const [selectedtab,setselectedtab] = useState(null);
    const [courtrylist , setcourtrylist] = useState([]);
    const context  = useContext(mycontext);
    const selectCountry = (index , country)=>{
        setselectedtab(index);
        setisOpenModal(false);
        context.setselectedCountry(country)
    }
    useEffect(()=>{
        setcourtrylist(context.courtrylist);
    },[])

    const filterlist=(e)=>{
        const keyword = e.target.value.toLowerCase();
        if(keyword!==""){
            const list = courtrylist.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            })
            setcourtrylist(list);
        }else{
            setcourtrylist(context.courtrylist);
        }
       
    }
    return (
        <>
        <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
            <div className="info d-flex flex-column">
                <span className='label'>Your Location</span>
                <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+ '..' : context.selectedCountry : 'select location'}</span>
            </div>
                <span className='ml-auto'><FaAngleDown /></span>
        </Button>

            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationmodel'  TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)} ><IoMdClose/></Button>

             <div className='headersearch w-100'>
                <input type='text' placeholder='Search your area..' onChange={filterlist}></input>
            <Button><FaSearch /></Button> 
            </div>

            <ul className='courtrylist mt-3'>
                {
                   courtrylist?.length !==0 && courtrylist?.map((item,index)=>{
                        return(
                            <li key={index}><Button onClick={()=>selectCountry(index,item.country)}
                                className={`${selectedtab === index ? 'active' : ''}`}
                            >{item.country}</Button></li>
                        )
                    })
                }
            </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
