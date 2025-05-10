import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Quantitybox from "../../components/quantitydrop/Quantitybox";
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import ProductZoom from '../productzoom'
import { useContext, useRef } from 'react';
import 'react-inner-image-zoom/lib/styles.min.css';
import { FaHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { mycontext } from '../../App';


const ProductModal =(props) =>{
    
    
      const context = useContext(mycontext)

   

    return(
        <>
          <Dialog open={true} className='productmodal' onClose={()=>context.setisOpenProductModel(false)} >
                      
                        <Button className='close_'  onClick={()=> context.setisOpenProductModel(false)}><IoMdClose/></Button>
                            <h4 className='mb-3 font-weight-bold'>Field Roast Chao Cheese Creamy Original</h4>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex align-items-center mr-4'>
                              <span>Brands : </span>
                              <span className='ml-2'><b>Welch's</b></span>
                              </div>
                              <Rating  name="read-only" value={2.80 }  size='small' precision={0.5} readOnly/>
                            </div>

                              <hr/>
                             <div className='row mt-2 productdetailsm'>
                                    <div className='col-md-5'>
                                        <ProductZoom/>
                                        </div>    

                                        <div className='col-md-7'>
                                            <div className='d-flex info align-items-center mb-3'>
                                                <span className='oldprice lg'>$24.00</span>
                                                <span className='newprice  text-danger ml-2 lg'>$19.50</span>
                                            </div>
                                            <span className='badge bg-success'>In Stock</span>
                                            <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                                            <div className='d-flex align-items-center'>
                                               <Quantitybox/>
                                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to cart</Button>
                                            </div>

                                        <div className='d-flex align-items-center mt-5 actions'>
                                        <Button className="btn-round btn-sml" variant="outlined"><FaHeart/> &nbsp; Add to Wishlist</Button>
                                        <Button className="btn-round btn-sml ml-3" variant="outlined"><MdOutlineCompareArrows/> &nbsp; Compare</Button>
                                        </div>

                                        </div>    
                             </div>
                 
                    </Dialog>
        </>
    )
}

export default ProductModal;