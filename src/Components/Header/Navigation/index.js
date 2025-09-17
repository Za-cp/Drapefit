import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { GiClothes } from "react-icons/gi";
import { FaCamera } from 'react-icons/fa';
import { HiMenuAlt4 } from "react-icons/hi";




const Navigation = () => {
    const [isopenSidebarVal, setIsopenSidebarVal] = useState(false);
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-7 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={() => setIsopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><HiMenuAlt4 /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                            <div className={`sidebarNav ${isopenSidebarVal ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Best Seller<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu'>
                                    <Link to="/"><Button>Dresses</Button></Link>
                                    <Link to="/"><Button>Customer wear</Button></Link>
                                    <Link to="/"><Button>Most Popular</Button></Link>
                                    
                                    </div>
                                    </li>
                                    <li><Link to="/"><Button>WOMEN<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Tops</Button></Link>
                                    <Link to="/"><Button>T-Shirts</Button></Link>
                                    
                                    </div>

                                    </li>
                                    <li><Link to="/"><Button>Ocassion</Button></Link>
                                    <div className='submenu'>
                                    <Link to="/"><Button>Formal Wear</Button></Link>
                                    <Link to="/"><Button>Casual Wear</Button></Link>
                                    
                                    </div>

                                    </li>
                                    <li><Link to="/"><Button>New Arrival</Button></Link>
                                    <div className='submenu'>
                                    <Link to="/"><Button>Trending Now</Button></Link>
                                    <Link to="/"><Button>Latest Fashion</Button></Link>
                                    <Link to="/"><Button>Limited Edition</Button></Link>
                                    </div></li>
                                    <li><Link to="/"><Button>Sales&Discounts</Button></Link>
                                    
                                    <div className='submenu '>
                                    <Link to="/"><Button>Under 50%</Button></Link>
                                    <Link to="/"><Button>Upto 50% OFF</Button></Link>
                                    <Link to="/"><Button>Clearance Sale</Button></Link>
                                    
                                </div></li>
                                    
                                    <li><Link to="/"><Button>Seasonal Wear</Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Winter Collection</Button></Link>
                                    <Link to="/"><Button>Summer Essential</Button></Link>
                                </div></li>
                                    <li><Link to="/"><Button>GIFTS<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Tops</Button></Link>
                                    <Link to="/"><Button>T-Shirts</Button></Link>
                                    
                                </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'><Link to="/"><Button><span className='icon2 ml-2'><FaHome /></span>HOME<span className='icon2 ml-2'><FaAngleDown /></span></Button></Link>
                            <div className='submenu shadow'>
                                    <Link to="/"><Button>Dashboard</Button></Link>
                                    <Link to="/"><Button>Recent Activity</Button></Link>
                                    </div>
                                    </li>
                            
                            
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Products<span className='icon2 ml-2'><FaAngleDown /></span></Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>New Arrival</Button></Link>
                                    <Link to="/"><Button>Best Sellers</Button></Link>
                                    
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button><span className='icon2 ml-2'><GiClothes /></span>TryMe</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Upload image</Button></Link>
                                    <Link to="/"><Button>My Try-On</Button></Link>
                                    <Link to="/"><Button>Saved Styles</Button></Link>
                                    
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Features</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>3D Model Viewer</Button></Link>
                                    <Link to="/"><Button>Online Virtual Tryon</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button><span className='icon2 ml-2'><FaCamera /></span>BLOG<span className='icon2 ml-2'><FaAngleDown /></span></Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Latest Trend</Button></Link>
                                    <Link to="/"><Button>Styling Guideline</Button></Link>
                                    <Link to="/"><Button>Celebrity Look</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Support</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>FAQs</Button></Link>
                                    <Link to="/"><Button>Contact Us</Button></Link>
                                </div>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
