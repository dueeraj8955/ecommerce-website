import React, { Fragment , useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getProductDetails,
  } from "../../actions/productAction";


const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    const params =useParams();

    const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

    useEffect(() => {


        dispatch(getProductDetails(match.params.id));
      }, [dispatch, match.params.id]);

    return (
        <Fragment>
            <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            </div>
        </Fragment>
    )
}

export default ProductDetails;