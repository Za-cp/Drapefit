import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [value, setValue] = useState([500, 60000]);
    const [value2, setValue2] = useState(0);
      // Only one state variable for the slider value

    return (
        <>
            <div className="sidebar">
                
                <div className="filterbox">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="New Arrival" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Women" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Ocassions" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Gifts" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Sale" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Best Sellers" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Discounts" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Tops" />
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="filterbox">
                    <h6>FILTER BY PRICE</h6>
                    <RangeSlider value={value} onInput={setValue} min={200} max={60000} step={5} />

                    <div className='d-flex pt-2 pb-2 priceRange mt-3'>
                        <span>Low: <strong className='text-light'>Rs{value[0]}</strong></span>
                        <span className="ml-auto">High: <strong className='text-light'>Rs{value[1]}</strong></span>
                    </div>
                </div>
                <div className="filterbox">
                    <h6>PRODUCT STATUS</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="In Stock" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="On Sale" />
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="filterbox">
                    <h6>BRANDS</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Adidas" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Fossils" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Nike" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Vera bradely" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="NuLoom" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="HUGE boss" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="A&M" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Guess Factory" />
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
               
                <Link to="#" ><img src="https://shop.simon.com/cdn/shop/files/e9b6b6086a3041a0b882afda4b1e9d47_360x.jpg?v=1736822105" className="w-100"/></Link>
            </div>
            
        </>
    );
}

export default Sidebar;