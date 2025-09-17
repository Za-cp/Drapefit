import { IoMdHeartEmpty } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { MyContext } from "../../App";
import React, { useContext, useState } from "react";

import ProductModal from '../ProductModal';

const ProductItem = (props) => {
  const context = useContext(MyContext);
  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  };

  return (
    <>
      <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://img-new.cgtrader.com/items/925426/5abc3817a2/t-shirt-grey-3d-model-5abc3817a2.jpg"
            className="w-100"
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}><TfiFullscreen /></Button>
            <Button><IoMdHeartEmpty /></Button>
          </div>
        </div>
        <div className="info">
          <h5>Women's ultimate365 tour frostguard</h5>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">Rs-1000.00</span>
            <span className="netPrice text-danger ml-2">Rs-790.00</span>
          </div>
        </div>
      </div>

      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://shop.simon.com/cdn/shop/files/eb1608b11ee340d0a9bbc69f1c436e9d_360x.jpg?v=1711766667"
            className="w-100"
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(2)}><TfiFullscreen /></Button>
            <Button><IoMdHeartEmpty /></Button>
          </div>
        </div>
        <div className="info">
          <h5>Johnny Was</h5>
          <span className="text-success d-block">0ut of Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">Rs-5600</span>
            <span className="netPrice text-danger ml-2">Rs-2000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;