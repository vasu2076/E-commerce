import Button from '@mui/material/Button';
import Homebanner from "../../components/homebanner";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { MdFullscreen } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { mycontext } from "../../App";
import { useContext } from "react";
import { Link } from 'react-router-dom';


const Home = ()=>{

    
    var productslideroptions = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    
    const context = useContext(mycontext);
   
     const viewProductDetails = (id) => {
       context.setisOpenProductModel(true);
     };
    // const closeProductModal=()=>{
    //     context.setisOpenProductModel(false);
    // }
    return(
        <>
          <Homebanner/>
        

        <section className="homeproducts">
                {/* side banner */}
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                        <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/banner1.jpg"alt='img' className="cursor"></img>
                        </div>
                    </div>

                    {/* BEST SELLERS */}
                        <div className="col-md-9 productrow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text=sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className='viewallbtn ml-auto'>View All<FaArrowRight/></Button>
                            </div>
                            
                            <div className="product_row w-100 mt-4 ">
                             <Slider {...productslideroptions}>  
                            {/* <ProductItem/>  */}
                            <div className="item productitem">
                                <div className="imgwrapper">
                                <Link to="/product/:1">
                                 <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"
                                    alt="img"
                                    className="w-100"
                                />
                                </Link>

                                <span className="badge badge-primary">28%</span>
                                <div className="action">
                                    <Button onClick={() => viewProductDetails(1)}>
                                    <MdFullscreen />
                                    </Button>
                                    <Button>
                                    <CiHeart style={{ fontSize: "20px" }} />
                                    </Button>
                                </div>
                                </div>

                                <div className="info">
                                <h4>Field Roast Chao Cheese Creamy Original</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating
                                    className="mt-2 mb-2"
                                    name="read-only"
                                    value={2.8}
                                    readOnly
                                    size="small"
                                    precision={0.5}
                                />
                                <div className="d-flex">
                                    <span className="oldprice"> $24.00</span>
                                    <span className="newprice text-danger ml-2"> $19.50</span>
                                </div>
                                <Button className="addtocart">Add To Cart</Button>
                                </div>
                            </div>

                            <div className="item productitem">
                            <div className="imgwrapper">
                                  <Link to="/product/:1">
                            <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg"
                                alt="img"
                                className="w-100"
                            />
                            </Link>
                            <span className="badge badge-primary">20%</span>
                            <div className="action">
                                <Button  onClick={() => viewProductDetails(1)}>
                                <MdFullscreen />
                                </Button>
                                <Button>
                                <CiHeart style={{ fontSize: "20px" }} />
                                </Button>
                            </div>
                            </div>
                            <div className="info">
                            <h4>Nestle Original Coffee-Mate Coffee</h4>
                            <span className="text-success d-block">In Stock</span>
                            <Rating
                                className="mt-2 mb-2"
                                name="read-only"
                                value={2.8}
                                readOnly
                                size="small"
                                precision={0.5}
                            />
                            <div className="d-flex">
                                <span className="oldprice"> $20.00</span>
                                <span className="newprice text-danger ml-2"> $14.00</span>
                            </div>
                            <Button className="addtocart">Add To Cart</Button>
                            </div>
                                </div>

                            <div className="item productitem">
                                <div className="imgwrapper">
                                      <Link to="/product/:1">
                                <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                                    alt="img"
                                    className="w-100"
                                />
                                </Link>
                                <span className="badge badge-primary">10%</span>
                                <div className="action">
                                    <Button>
                                    <MdFullscreen />
                                    </Button>
                                    <Button>
                                    <CiHeart style={{ fontSize: "20px" }} />
                                    </Button>
                                </div>
                                </div>
                                <div className="info">
                                <h4>Werther's Original Caramel Hard Candies</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating
                                    className="mt-2 mb-2"
                                    name="read-only"
                                    value={2.8}
                                    readOnly
                                    size="small"
                                    precision={0.5}
                                />
                                <div className="d-flex">
                                    <span className="oldprice"> $11.68</span>
                                    <span className="newprice text-danger ml-2"> $14.97</span>
                                </div>
                                <Button className="addtocart">Add To Cart</Button>
                                </div>
                            </div>

                            <div className="item productitem">
                                <div className="imgwrapper">
                                  <Link to="/product/:1">
                                <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
                                    alt="img"
                                    className="w-100"
                                />
                                </Link>
                                <span className="badge badge-primary">30%</span>
                                <div className="action">
                                    <Button>
                                    <MdFullscreen />
                                    </Button>
                                    <Button>
                                    <CiHeart style={{ fontSize: "20px" }} />
                                    </Button>
                                </div>
                                </div>
                                <div className="info">
                                <h4>Blue Diamond Almonds Lightly Salted</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating
                                    className="mt-2 mb-2"
                                    name="read-only"
                                    value={2.8}
                                    readOnly
                                    size="small"
                                    precision={0.5}
                                />
                                <div className="d-flex">
                                    <span className="oldprice"> $11.68</span>
                                    <span className="newprice text-danger ml-2"> $10.58</span>
                                </div>
                                <Button className="addtocart">Add To Cart</Button>
                                </div>
                            </div>
                            </Slider>
                            </div>
                        </div>
                </div>

                {/* slide banner 2 */}
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"alt='img' className="cursor"></img>
                        </div>
                    </div>

                        {/* new product  */}
                        <div className="col-md-9 productrow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd mt-4">NEW product</h3>
                                    <p className="text-light text=sml mb-0">New product with update Stock</p>
                                </div>
                                <Button className='viewallbtn ml-auto'>View All<FaArrowRight/></Button>
                            </div>

                            <div className='product_row w-100 mt-4 '>
                            <Slider {...productslideroptions}>

                                <div className='item productitem'>
                                    <div className='imgwrapper'>
                                        <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg'alt='img' className='w-100'/>
                                        <span className='badge badge-primary'>28%</span>

                                            <div className='action'>
                                        <Button><MdFullscreen/></Button> 
                                        <Button><CiHeart style={{fontSize : '20px'}} /></Button> 
                                            </div>
                                    </div>
                                        <div className='info'>
                                            <h4>Field Roast Chao Cheese Creamy Original</h4>
                                                <span className='text-success d-block'>In Stock</span>
                                                <Rating className='mt-2 mb-2' name="read-only" value={2.80 } readOnly size='small' precision={0.5}/>
                                            <div className='d-flex'>
                                                <span className='oldprice'> $24.00</span>
                                                <span className='newprice text-danger ml-2'> $19.50</span>
                                            </div>
                                            <Button className='addtocart'>Add To Cart</Button>
                                        </div>    
                                </div>
                                <div className='item productitem'>
                                    <div className='imgwrapper'>
                                        <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg' alt='img'className='w-100'/>
                                        <span className='badge badge-primary'>20%</span>
                                        <div className='action'>
                                        <Button><MdFullscreen/></Button> 
                                        <Button><CiHeart style={{fontSize : '20px'}} /></Button> 
                                            </div>

                                    </div>
                                <div className='info'>
                                        <h4>Nestle Original Coffee-Mate Coffee</h4>
                                            <span className='text-success d-block'>In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={2.80 } readOnly size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'> $20.00</span>
                                            <span className='newprice text-danger ml-2'> $14.00</span>
                                        </div>
                                        <Button className='addtocart'>Add To Cart</Button>
                                </div>
                                </div>

                                <div className='item productitem'>
                                <div className='imgwrapper'>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' alt='img' className='w-100'/>
                                    <span className='badge badge-primary'>10%</span>
                                    <div className='action'>
                                        <Button><MdFullscreen/></Button> 
                                        <Button><CiHeart style={{fontSize : '20px'}} /></Button> 
                                            </div>

                                </div>
                                    <div className='info'>
                                <h4>Werther's Original Caramel Hard Candies</h4>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating className='mt-2 mb-2' name="read-only" value={4} readOnly size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'> $11.68</span>
                                        <span className='newprice text-danger ml-2'> $14.97</span>
                                    </div>
                                    <Button className='addtocart'>Add To Cart</Button>
                                </div>
                                </div>

                                <div className='item productitem'>
                                    <div className='imgwrapper'>
                                        <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg'alt='img' className='w-100'/>
                                        <span className='badge badge-primary'>30%</span>
                                        <div className='action'>
                                        <Button><MdFullscreen/></Button> 
                                        <Button><CiHeart style={{fontSize : '20px'}} /></Button> 
                                            </div>

                                    </div>
                                        <div className='info'>
                                <h4>Blue Diamond Almonds Lightly Salted</h4>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating className='mt-2 mb-2' name="read-only" value={3} readOnly size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'> $11.68</span>
                                        <span className='newprice text-danger ml-2'> $10.58</span>
                                    </div>
                                    <Button className='addtocart'>Add To Cart</Button>
                                </div>
                                </div>
                                </Slider>
                            </div>

                            {/* middle banner */}
                               <div className='d-flex mb-5 bannersec'>
                               <div className='banner mt-5 mx-3'>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg' alt="" className='cursor w-100'></img>
                                </div>

                                <div className='banner mt-5 mx-3'>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg' alt="" className='cursor w-100'></img>
                                </div>

                               </div>
                            </div>
                         </div>               
        </section>

         


            {/* newslettersection start */}
        <section className='newslettersection mt-3 mb-3 d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='text-white mb-1'>$20 discount for your first order</p>
                        <h4 className='text-white'>Join our newsletter and get...</h4>
                        <p className='text-light'>Join our email subscription now to get
                            updates on<br/>  promotions and coupons.</p>

                            <form>
                                <MdOutlineEmail/><input type='text' placeholder='Your Email Address' />
                                <Button>subscribe</Button>
                             </form>

                    </div>
                    <div className='col-md-6'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png'alt='img'></img>
                        </div>
                </div>
            </div>
        </section>
     
        </>
    )
}

export default Home;