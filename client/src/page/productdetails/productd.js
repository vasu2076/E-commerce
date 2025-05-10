import ProductZoom from "../../components/productzoom"
import Rating from '@mui/material/Rating';
import Quantitybox from "../../components/quantitydrop/Quantitybox";
import Button from '@mui/material/Button';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Relatedproduct from "./relatedproduct";

const ProductDetails = () =>{
    return (
        <>
           <section className="productdetails section">
            <div className="containe">
               <div className="row">
                <div className="col-md-4 pl-5">
                    <ProductZoom/>
                </div>

                <div className="col-md-7 pl-5 pr-5">
                <h2 className="hd text-capitalize">Field Roast Chao Cheese Creamy Original</h2>
                <ul className="list list-inline d-flex align-items-center">
                    <li className="list-inline-item">
                       <div className="d-flex align-items-center">
                       <span className="text-light mr-2">Brands :</span>
                       <span>Welch's</span>
                       </div> 
                    </li> 
                
                    <li className="list-inline-item ">
                        <div className="d-flex align-items-center">
                         <Rating  name="read-only" value={2.80 }  size='large' precision={0.5} readOnly/>
                         <span className="text-light cursor ml-2"> 1 Review</span>
                        </div>
                        </li>
                </ul>

                    <div className="d-flex info">
                    <span className='oldprice'>$24.00</span>
                    <span className='newprice  text-danger ml-2 '>$19.50</span>
                    </div>
                    <span className='badge bg-success'>In Stock</span>

                    <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                   

                    <div className="d-flex align-items-center mt-4">
                        <Quantitybox/>
                        <Button className="btn-blue btn-lg btn-big btn-round"><FaCartShopping />Add to cart</Button>
                        <Tooltip title="Add to Wishlist" placement="top">
                        <button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart/></button>
                        </Tooltip>
                        <Tooltip title="Compare" placement="top">
                        <button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaCartShopping/></button>
                        </Tooltip>
                    </div>

                    </div>

               </div>

            <Relatedproduct/>

            </div>

           </section>
        </>
    )
}

export default ProductDetails