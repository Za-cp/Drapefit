import { useState, Suspense } from "react";
import Sidebar from "../../Components/Sidebar";
import Spline from "@splinetool/react-spline";
import "../../Components/Sidebar/Sidebar.css";
import { IoIosMenu } from "react-icons/io";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { HiViewGrid } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';


const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four'); // ✅ Fixed

  const openDropDown = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="product-Listing-Page">
      <div className="container">
        <div className="productListing d-flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Right Content */}
          <div className="content-right">
            <Suspense fallback={<div>Loading 3D Model...</div>}>
              <Spline
                scene="https://prod.spline.design/3N7GoFyozF2msMrF/scene.splinecode"
                className="w-100"
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "8px",
                }}
              />
            </Suspense>

            {/* Filter and View Options */}
            <div className="showBy mt-3 mb-3 d-flex align-items-center">
              {/* View Mode Buttons */}
              <div className="btnWrapper d-flex align-items-center gap-2">
                <Button className={productView==='one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu /></Button>
                <Button className={productView==='two' && 'act'}onClick={() => setProductView('two')}><HiViewGrid /></Button>
                <Button className={productView==='three' && 'act'}onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                <Button className={productView==='four' && 'act'}onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
              </div>

              {/* Dropdown Filter */}
              <div className="ml-auto showByFilter">
                <Button
                  id="filter-button"
                  aria-controls={openDropDown ? "filter-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDropDown ? "true" : undefined}
                  onClick={handleClick}
                >
                  Show 9 <FaAngleDown />
                </Button>

                <Menu
                  className="w-100 showPerPageDropDown"
                  id="filter-menu"
                  anchorEl={anchorEl}
                  open={openDropDown}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "filter-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>10</MenuItem>
                  <MenuItem onClick={handleClose}>20</MenuItem>
                  <MenuItem onClick={handleClose}>30</MenuItem>
                  <MenuItem onClick={handleClose}>40</MenuItem>
                  <MenuItem onClick={handleClose}>50</MenuItem>
                </Menu>
              </div>
            </div>

            {/* Product Listing */}
            <div className="productListing">
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5">
            <Pagination count={10} color="primary" size="large"/>           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;