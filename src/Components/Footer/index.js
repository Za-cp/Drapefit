
import { CiBadgeDollar } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuShirt } from "react-icons/lu";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/> </span>
                        <span classname="ml-2">Newly Products</span>

                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/> </span>
                        <span classname="ml-2">Free delivery for order over $20</span>

                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbDiscount/> </span>
                        <span classname="ml-2">Daily Mega Discounts</span>

                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiBadgeDollar/> </span>
                        <span classname="ml-2">Best price for market</span>

                    </div>
                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col ">
                        <h5>Quick Link</h5>
                        <h4 class="webintern_footer_title h5"></h4>
                                         
                        <ul>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Email</Link></li>
                            <li><Link to="#">Delivery</Link></li>
                            <li><Link to="#">Help</Link></li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h5>Accounts</h5>
                        <h4 class="webintern_footer_title h5"></h4>
                        <ul>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Mission</Link></li>
                            <li><Link to="#">Social</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Activate Cards</Link></li>
                            <li><Link to="#">Rules</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h5>Products</h5>
                        <h4 class="webintern_footer_title h5"></h4>
                        <ul>
                            <li><Link to="#">BrandFlow</Link></li>
                            <li><Link to="#">Redeem Code</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Awards</Link></li>
                            <li><Link to="#">Supply</Link></li>
                            <li><Link to="#">Return</Link></li>
                            <li><Link to="#">pricing</Link></li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h5>Company</h5>
                        <h4 class="webintern_footer_title h5"></h4>
                        <ul>
                            <li><Link to="#">Buy a gift card</Link></li>
                            <li><Link to="#">History</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Return</Link></li>
                            <li><Link to="#">Sales</Link></li>
                            <li><Link to="#">Delivery&payment</Link></li>
                            <li><Link to="#">Email</Link></li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h5>Assistance</h5>
                        <h4 class="webintern_footer_title h5"></h4>
                        <ul>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Collections</Link></li>
                            <li><Link to="#">Shipping Information</Link></li>
                            <li><Link to="#">Sales</Link></li>
                            <li><Link to="#">Size Guide</Link></li>
                           
                        </ul>
                    </div>
                </div>
                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved.</p>
                    <ul className="list list-inline ml-auto mb-0">
                        <li classaName=" list-list-item">
                        <Link to="#"><FaFacebookF/></Link> 
                        </li>
                        <li classaName=" list list-item">
                        <Link to="#"><FaTwitter/></Link> 
                        </li>
                        <li classaName=" list list-item">
                        <Link to="#"><FaInstagram/></Link> 
                        </li>
                        <li classaName=" list list-item">
                        <Link to="#"><FaGoogle/></Link> 
                        </li>
                    </ul>
                </div>

            </div>
        </footer>

    )
}
export default Footer;