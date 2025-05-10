import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState, useEffect } from 'react';
import { Link } from '@mui/material';

const Sidebar = () => {
    const [value, setvalue] = useState([100, 60000]);
    const [value2, setvalue2] = useState(0);

    useEffect(() => {
        setvalue2(value[0]);
    }, [value]);

    return (
        <>
            <div className="slidebar">
                <div className="filtersbox">
                    <h5>Product Categories</h5>
                    <div className='scroll'>
                        <ul>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Men" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Women" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Beauty" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Kids" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Grocery" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Watch" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Gift" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="camera" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Kids" /></li>
                        </ul>
                    </div>
                </div>

                <div className="filtersbox2 mb-4">
                    <h5>Filter by price</h5>
                    <RangeSlider value={value} onInput={setvalue} min={100} max={25000} step={5} />
                    <div className='d-flex pt-2 pb-2 pricerange'>
                        <span>From: <strong className='c-blue'>Rs: {value[0]}</strong></span>
                        <span className='ml-auto'>From: <strong className='c-blue'>Rs: {value[1]}</strong></span>
                    </div>
                </div>

                <div className="filtersbox">
                    <h5>PRODUCT STATUS</h5>
                    <div className='scroll'>
                        <ul>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Stock" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="On Sale" /></li>
                        </ul>
                    </div>
                </div>

                <div className="filtersbox">
                    <h5>BRANDS</h5>
                    <div className='scroll'>
                        <ul>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Frito Lay" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Nespresso" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Oreo" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Quaker" /></li>
                        </ul>
                    </div>
                </div>
               

                <Link to="#"><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif'className='w-100 mt-2'style={{borderRadius:'8px'}}/></Link>
            </div>
        </>
    );
};

export default Sidebar;
