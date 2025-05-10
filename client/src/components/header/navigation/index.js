// navigation/index.js
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {

    const [isOpenslidebarval,setisOpenslidebarval] =  useState(false)

    return (
        <nav>
            <div className='container3'>
                <div className='row'>
                    <div className='col-sm-3 navpart1'>
                       <div className='cartwrapper'>
                       <Button className='allcarttab align-items-center' onClick={() => setisOpenslidebarval(!isOpenslidebarval)}>
                            <span className='icon1 mr-2'><IoMdMenu/></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='icon1 ml-2'><FaAngleDown/></span>
                        </Button>

                        <div className={`slidebarnav ${isOpenslidebarval ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submen shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Women<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submen shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Grocery</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                </ul>
                        </div>
                       </div>
                    </div>
                    <div className='col-sm-9 navpart2 d-flex align-items-center '>
                        <ul className='list list-inline ml-alto'>
                            <li className='list-inline-item'><Link to="/"><Button><FaHome/>Home</Button></Link></li>
                            <li className='list-inline-item'><Link to="/">
                            <Button>Men</Button></Link>
                                <div className='submen shadow'>
                                 <Link to="/"><Button>Clothing</Button></Link>
                                 <Link to="/"><Button>Footwear</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/">
                            <Button>Women</Button></Link>
                            <div className='submen shadow'>
                                 <Link to="/"><Button>Clothing</Button></Link>
                                 <Link to="/"><Button>Footwear</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                 <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Grocery</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Watches</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Kids</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Gift</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button><TiContacts/>Contact-us</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
