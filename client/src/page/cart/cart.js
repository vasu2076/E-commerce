import { Link } from "react-router-dom"
import Rating from '@mui/material/Rating';
import Quantitybox from "../../components/quantitydrop/Quantitybox";
import { MdCancel } from "react-icons/md";
import Button from '@mui/material/Button';

const Cart=()=>{
    return(
        <>
            <section className="section cartpage">
                <div className="containe">
                   <h2 className="hd mb-2">Cart</h2>
                    <p>there are <b>3</b> product in your cart</p>
                   <div className="row">
                    <div className="col-md-8">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th width="40%">Product</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <Link to="product/1">
                                        <div className="d-flex align-items-center cartitemi">
                                            <div className="imgwrapper">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg" className="w-100"/>
                                            </div>
                                            <div className="info px-3">
                                                <h6>Blueberries-1 Pint Package</h6>
                                                <Rating className="mt-2 mb-2" name="read-only" value={2.8} readOnly size="small" precision={0.5}  />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="ml-10">$7.25</td>
                                    <td>
                                        <Quantitybox/>
                                    </td>
                                    <td>$7.25</td>
                                    <td className="cancel"><Button><MdCancel/></Button></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    </div>

                    <div className="col-md-3 pr-2">
                        <div className="card border shadow p-3 cartdetails">
                            <h4>Cart Total</h4>
                            <div className="d-flex align-items-center mb-3">
                                <span>Subtotal</span>
                                <span className="ml-auto text-red font-weight-bold">$13.41</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span>Shipping</span>
                                <span className="ml-auto"><b>Free</b></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span>Estimate For</span>
                                <span className="ml-auto"><b>United Kingdom</b></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span>Total</span>
                                <span className="ml-auto text-red font-weight-bold">$13.41</span>
                            </div>
                            
                            <Button className="btn-blue bg-red btn-lg btn-big font-weight-bold">Proeed to checkout</Button>
                        </div>
                    </div>

                   </div>
                </div>
            </section>
        </>
    )
}
export default Cart