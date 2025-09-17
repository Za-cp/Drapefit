import { Link } from 'react-router-dom';
import Logo from '../../assets/images.png';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CountryDropDown from '../CountryDropDown';
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { useContext, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import "../../Components/Header/SearchBox/SearchBox.css"; // Import your CSS file

const Header = () => {
    const context = useContext(MyContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false); // State for About Us section

    return (
        <>
            {/* Top Strip */}
            <div className="simon-tab_wrap spoApp_hide">
                <div className="simon-tab">
                    <nav className="simon-tab__nav">
                        <ul className="simon-tab__ul">
                            <li>
                                <span className="tab-cta tab-cta__inactive">LUXURY</span>
                            </li>
                            <li className="tab-container__divider">|</li>
                            <li>
                                <span className="tab-cta tab-cta__active">
                                    PREMIUM OUTLETS<sup>®</sup>
                                </span>
                            </li>
                            <li className="tab-container__divider">|</li>
                            <li>
                                <a className="tab-cta tab-cta__inactive" href="/">
                                    SHOP DRAPEFIT<sup>TM</sup>
                                </a>
                            </li>
                            <li className="tab-container__divider">|</li>
                            <li>
                                <span 
                                    className="tab-cta tab-cta__active" 
                                    onClick={() => setAboutUsOpen(!aboutUsOpen)} // Toggle About Us section
                                    style={{ cursor: "pointer" }}
                                >
                                    MEET DRAPEFIT<Button className="circle"><IoMdArrowDropdown/></Button>
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* About Us Section */}
            {aboutUsOpen && (
                <div className="responsive-container-block bigContainer">
                    <div className="responsive-container-block Container">
                        <div className="imgContainer">
                            <img className="mainImg" src="https://th.bing.com/th/id/R.3c1c46a302a0695e110ac4232a0b3c2f?rik=7op6kcODuuKXbg&pid=ImgRaw&r=0" alt="about us" />
                        </div>
                        <div className="responsive-container-block textSide">
                            <p className="text-blk heading">DrapeFit – Where AR Meets Style</p>
                            <p className="text-blk subHeading">
                                "DrapFit allows users to virtually try on clothes by generating a 3D model based on uploaded images. Using AI and 3D modeling, it maps garments onto the user's body for a realistic fit preview. This enhances shopping confidence, reduces returns, and personalizes fashion recommendations."
                            </p>

                            {/* Values Cards */}
                            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                <div className="cardImgContainer">
                                    <img className="cardImg" src="https://th.bing.com/th/id/OIP.4OYThL63EXhXzpeYHtAwfgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="value 1" />
                                </div>
                                <div className="cardText">
                                    <p className="text-blk cardHeading">User Image Upload</p>
                                    <p className="text-blk cardSubHeading">Users upload images to generate a personalized 3D model.</p>
                                </div>
                            </div>
                            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                <div className="cardImgContainer">
                                    <img className="cardImg" src="https://static.turbosquid.com/Preview/2014/05/17__13_31_50/Female_Head_Wire_1_.jpgb75b44e7-c776-4034-b906-e3c81901e8d1Zoom.jpg" alt="value 4"/>
                                </div>
                                <div className="cardText">
                                    <p className="text-blk cardHeading"> 3D Model Creation</p>
                                    <p className="text-blk cardSubHeading">AI processes the image to create an accurate virtual body representation.</p>
                                </div>
                            </div>
                            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                <div className="cardImgContainer">
                                    <img className="cardImg" src="https://th.bing.com/th/id/OIP.Yzdpn__5PyaX8nqW1JtYTwHaEr?w=232&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="value 4" />
                                </div>
                                <div className="cardText">
                                    <p className="text-blk cardHeading">Virtual Try-On & Fit Simulation</p>
                                    <p className="text-blk cardSubHeading">Clothes are mapped onto the 3D model for a realistic try-on experience.</p>
                                </div>
                            </div>

                            <button className="explore">Explore our Website</button>
                        </div>
                        <img className="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" alt="decorative" />
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container text-center">
                        <p className="mb-0 mt-0">
                            LUXE DESIGNER FAVORITES
                        </p>
                    </div>
                </div>

                <div className="header">
                    <div className="container d-flex align-items-center justify-content-between">
                        {/* Logo */}
                        <div className="logoWrapper">
                            <Link to="/">
                                <img src={Logo} alt="DrapeFit Logo" />
                            </Link>
                        </div>

                        {/* Search & Country Dropdown */}
                        <div className="part2 d-flex align-items-center">
                            {context.countryList.length !== 0 && <CountryDropDown />}
                            <SearchBox />
                        </div>

                        <div className="part3 d-flex align-items-center">
                        {/* User Profile */}
                        <Link to="/SignIn">
                            <Button className="circle" aria-label="User Profile">
                                <HiOutlineUserCircle />
                            </Button>
                        </Link>

                            {/* Cart & Wishlist */}
                            <div className="cartTab d-flex align-items-center ml-3">
                                <span className="price"></span>
                                <div className="position-relative ml-1 icon-group">
                                    <Button className="circle cart-icon" aria-label="Shopping Cart">
                                        <AiOutlineShoppingCart />
                                    </Button>
                                    <span className="count">3</span>
                                    <Button className="circle heart-icon" aria-label="Wishlist">
                                        < IoHeartOutline />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Menu */}
            <Navigation menuOpen={menuOpen} />
        </>
    );
};

export default Header;