import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { MdFullscreen } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { mycontext } from "../../App";
import { useContext } from "react";

const ProductItem = (props) => {
  const context = useContext(mycontext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModel(true);
  };

  return (
    <>
     
          <div className={`productitem ${props.itemView}`}>
            <div className="imgwrapper">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"
                alt="img"
                className="w-100"
              />
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

          <div className={`productitem ${props.itemView}`}>
            <div className="imgwrapper">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg"
                alt="img"
                className="w-100"
              />
              <span className="badge badge-primary">20%</span>
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

          <div className={`productitem ${props.itemView}`}>
            <div className="imgwrapper">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                alt="img"
                className="w-100"
              />
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

          <div className={`productitem ${props.itemView}`}>
            <div className="imgwrapper">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
                alt="img"
                className="w-100"
              />
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
    </>
  );
};

export default ProductItem;
