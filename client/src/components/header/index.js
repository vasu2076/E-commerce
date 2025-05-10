import { Link } from "react-router-dom";
import Logo from '../../assets/image/logo.png';
import CountryDropdown from '../countrydowne/index';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import SearchBox from './searchbox/index'
import Navigation from './navigation/index';
import { mycontext } from '../../App';
import { useContext } from 'react';

const Header = () => {

        
        const context = useContext(mycontext);
    
    return (
        <>
            <div className="headerwrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>covid 19</b> epidemic, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container2">
                    <div className="row">
                        <div className="logowrapper d-flex align-items-center col-sm-2">
                            <Link to="/"><img src={Logo} alt="logo" /></Link>
                        </div>

                        <div className='countr col-sm-10 d-flex align-items-center part2'>
                            {
                                context.courtrylist.length !==0 && <CountryDropdown />
                            }
                    
                        <SearchBox/>
              

                        <div className='part3 d-flex align-items-center ml-auto '>
                            {
                                context.islogin!==true ? <Link to="/sigin"><Button className='btn-blue btn-lg btn-big btn-round'>Sing In</Button></Link>  :  <Button className='btn-blue btn-lg btn-big btn-round'><FaUser/></Button>
                            }
                        <div className='ml-auto cartab d-flex align-items-center'>
                            <span className='price ml-5'>$0.0</span>
                            <div className='position-relative ml-5'>
                            <Link to="/cart"><Button className='circle'><IoCart /></Button></Link>
                            <span className='count d-flex align-items-center justify-content-center'>0</span>
                        </div>
                        </div>
                        </div>
                         </div>
                    </div>
                </div>
            </header> 

            <Navigation/>
        </>
    );
};

export default Header;
