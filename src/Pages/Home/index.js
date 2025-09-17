import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import banner5 from "../../assets/banner5.png";
import 'swiper/css/navigation';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import Spline from "@splinetool/react-spline";
import HomeCat from "../../Components/HomeCat";
import Adidas from "../../Components/Adidas";
import BlackShirt from "../../Components/BlackShirt";
import Floral from "../../Components/Floral";
import { MyContext } from "../../App";
import { EffectCoverflow, Pagination,Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";




import { Link } from "react-router-dom";
const Home = () => {
  const context = useContext(MyContext);
  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  }

  const [isOpenAdidas, setisOpenAdidas] = useState(false);
  const viewAdidas = (id) => {
    setisOpenAdidas(true);
  }
  const closeAdidas = () => {
    setisOpenAdidas(false);
  }

  const [isOpenBlackShirt, setisOpenBlackShirt] = useState(false);
  const viewBlackShirt = (id) => {
    setisOpenBlackShirt(true);
  }
  const closeBlackShirt = () => {
    setisOpenBlackShirt(false);
  }
  
  const [isOpenFloral, setisOpenFloral] = useState(false);
  const viewFloral = (id) => {
    setisOpenFloral(true);
  }
  const closeFloral = () => {
    setisOpenFloral
    (false);
  }

  const images = [
    "https://shop.simon.com/cdn/shop/files/3991f5db9abe465693edd38f1a313bd0_260afd0e-4889-43ce-b9e4-dd63b2957e0c_360x.webp?v=1720733545",
    "https://shop.simon.com/cdn/shop/files/34b38b69b4b546c5ba88e7f6e889a240_360x.jpg?v=1742359473",
    "https://shop.simon.com/cdn/shop/files/64945746cf1b49748019965d96ba74a4_360x.jpg?v=1744051679",
    "https://shop.simon.com/cdn/shop/files/e959cc4139974561b6057e57f4951612_360x.jpg?v=1738886989",
    "https://shop.simon.com/cdn/shop/files/7b19fed9a89d42fc80e6d5f156677686_360x.jpg?v=1741028858"
  ];
 
    const giftItems = [
      {
        title: "Luxury Spa Set",
        price: "$65",
        image: "/path-to-spa-set.jpg",
        category: "Pampering Gifts"
      },
      {
        title: "Designer Handbag",
        price: "$120",
        image: "/path-to-handbag.jpg",
        category: "Fashion"
      },
      {
        title: "Personalized Jewelry",
        price: "$85",
        image: "/path-to-jewelry.jpg",
        category: "Sentimental"
      },
      {
        title: "Gourmet Gift Basket",
        price: "$75",
        image: "/path-to-basket.jpg",
        category: "Food & Wine"
      },
      {
        title: "Smart Home Device",
        price: "$99",
        image: "/path-to-device.jpg",
        category: "Tech Gadgets"
      }
    ];

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
          <div className="col-md-3">
  <div className="sticky">
    <div className="banner">
      {/* Spline 3D Viewer */}
      <div className="text1-overlay">
      <h3>Dropping Soon </h3>
    </div>
      <Spline scene="https://prod.spline.design/zLQuOSWYRehS9oAe/scene.splinecode" />
    </div>
    <div className="banner1">
    <div className="text1-overlay">
      <h3>New Collection </h3>
    </div>
      {/* Spline 3D Viewer */}
      <Spline scene="https://prod.spline.design/j1bQF-xzsh4cf8-o/scene.splinecode" />
    </div>
    
  </div>
  
</div>


            <div className="col-md-9 productRow">
                    <div className="d-flex align-items-center">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className="text-light text-sml mb-0">Do not miss the current offers untill the end of Year.</p>
                        </div>
                    <Link to="/cat/:id" className="ml-auto" style={{ textDecoration: "none" }}>
                      <Button className="viewAllBtn">
                        VIEW ALL<IoIosArrowRoundForward />
                      </Button>
                    </Link>
                    </div>
                    <div className="product-row w-100 mt-4">
                    <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  navigation={true}
                  slidesPerGroup={2}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                        <img src="/assets1/shirt1.png" style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">20%</span>
                          <div className="actions">
                            <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Sark T-shirt</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-1000.0</span>
                          <span className="netPrice text-danger ml-2">Rs-790.0</span>
                        </div>
                        </div>
                        
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="/assets1/shirt5.png" style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                          <Button onClick={()=>viewAdidas(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                          
                        </div>
                        <div className="info">
                        <h5>Rewind Threads</h5>
                        <span className="text-success d-block ">0ut of Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-3600</span>
                          <span className="netPrice text-danger ml-2">Rs-2000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="/assets1/shirt2.png"  style={{ width: '200px', height: '190px' }} 
                        />
            
                          <span className="badge badge-primary">10%</span>
                          <div className="actions">
                          <Button onClick={()=>viewBlackShirt(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Multi Rebel T </h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2700</span>
                          <span className="netPrice text-danger ml-2">Rs-1500</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                        <img src="/assets1/Shirt4.png" style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">30%</span>
                          <div className="actions">
                          <Button onClick={()=>viewFloral(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Floral fragrance</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2300 </span>
                          <span className="netPrice text-danger ml-2">Rs-1400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://img-new.cgtrader.com/items/3835412/b8873f9425/t-shirt-motel-3d-model-obj-fbx-dxf-pdf-gltf-zpac.jpg" style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                          <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Brown shaded Jacket</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-5000</span>
                          <span className="netPrice text-danger ml-2">Rs-3000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://img-new.cgtrader.com/items/4263043/1ea9a9a7bc/large/streetwear-3d-t-shirt-freedom-03-wolves-studio-3d-model-1ea9a9a7bc.jpg"  style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">13%</span>
                          <div className="actions">
                            <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Bayeas</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-3500</span>
                          <span className="netPrice text-danger ml-2">Rs-1000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://media.cgtrader.com/variants/9HgwNGx637pKVUejgNLA8jEL/a26e47dab5f2d22c43d6c5ce4b4b46ecc30c70918878397cba1a10c1e35d7bfc/2.jpg"  style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">18%</span>
                          <div className="actions">
                          <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>ANDREE BY UNIT</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2000</span>
                          <span className="netPrice text-danger ml-2">Rs-1400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://img-new.cgtrader.com/items/4535627/99d20327cb/kids-t-shirt-cosy-club-3d-model-99d20327cb.jpg"   style={{ width: '200px', height: '190px' }} 
                        />
                          <span className="badge badge-primary">24%</span>
                          <div className="actions">
                          <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Gloria Vanderbilt</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-10000</span>
                          <span className="netPrice text-danger ml-2">Rs-6000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  
                      
                      
                      </Swiper>
                    </div>



                    <div className="d-flex align-items-center ">
  <div className="info w-75 mt-5">
    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
  </div>


</div>
                    <div className="product-row w-100 mt-4">
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={true}
                    slidesPerGroup={2}
                    modules={[Navigation]}
                    className="mySwiper"
                  
                >
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/608efc34247d4a47ab1c5a4c3ed79166_360x.jpg?v=1730241334"  className="w-75"/>
                          <span className="badge badge-primary">20%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Gergana Ivanova</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-1000</span>
                          <span className="netPrice text-danger ml-2">Rs-790</span>
                        </div>
                        </div>
                        
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/7f41c7ad853741f3afe4fa7aa9cd4b1c_360x.jpg?v=1737590201"  className="w-75"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                          
                        </div>
                        <div className="info">
                        <h5>FASHNZFAB</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-5600</span>
                          <span className="netPrice text-danger ml-2">Rs-2000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/1e049595b9cd4131bca3edfd84781842_b5df8227-5cbd-41eb-86f7-62402580a251_360x.jpg?v=1723779271"  className="w-75"/>
            
                          <span className="badge badge-primary">8%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>PISTOLA</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-6700</span>
                          <span className="netPrice text-danger ml-2">Rs-3400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/33674bd636a24dfda1967bdafca3a019_360x.jpg?v=1738280916"  className="w-100 "/>
                          <span className="badge badge-primary">38%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Calvin Klein</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2300</span>
                          <span className="netPrice text-danger ml-2">Rs-1400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/bc953da60b7d4206b0d3b4c83bff5470_af40f0d0-4293-4b5f-8239-246394fd384a_360x.jpg?v=1726679777"  className="w-75"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>AMBUSH</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2000</span>
                          <span className="netPrice text-danger ml-2">Rs-1500</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/77b7cc4526e24692924680254bcbd045_360x.jpg?v=1735939512"  className="w-100"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Dolce & Gabbana</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-3500</span>
                          <span className="netPrice text-danger ml-2">Rs-1000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/d632f8a772c2470da8be747e76d53501_360x.jpg?v=1739234971"  className="w-100"/>
                          <span className="badge badge-primary">18%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Calvin Klein</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2000</span>
                          <span className="netPrice text-danger ml-2">Rs-1400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/bfe23d6bad284749bdf6a4f3e5bfdecc_360x.jpg?v=1739242743"  className="w-100"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Salon 1884</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-10000</span>
                          <span className="netPrice text-danger ml-2">Rs-6000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  
                      
                      
                      </Swiper>
                      

                    </div>
                    <div className="product-row productRow2 w-100 mt-4">
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={true}
                    slidesPerGroup={2}
                    modules={[Navigation]}
                    className="mySwiper"
                  
                >
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/fa5943bef464474d8ed616fe5a9c1375_fed414a4-c3ad-4168-9126-f8aa11602ba5_360x.jpg?v=1723892115"  className="w-75"/>
                          <span className="badge badge-primary">25%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Bench</h5>
                        <span className="text-success d-block ">Out Of Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-10000</span>
                          <span className="netPrice text-danger ml-2">Rs-7900</span>
                        </div>
                        </div>
                        
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/1816e0b4f7eb414693c2b4ec7fa5c12d_360x.jpg?v=1736473638"  className="w-100"/>
                          <span className="badge badge-primary">22%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                          
                        </div>
                        <div className="info">
                        <h5>ADORA</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-5600</span>
                          <span className="netPrice text-danger ml-2">Rs-2000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/3e26b6753d834aaea8982bd7740bdbec_360x.jpg?v=1739571641"  className="w-75"/>
            
                          <span className="badge badge-primary">48%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>EILEEN FISHER</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-6700</span>
                          <span className="netPrice text-danger ml-2">Rs-3400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/91f70535f80040429e172ae960534758_360x.jpg?v=1735258831"  className="w-75"/>
                          <span className="badge badge-primary">38%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Democracy</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-2300</span>
                          <span className="netPrice text-danger ml-2">Rs-1400</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/3a7dc0ed1d284b0b9c50fbc7cde59d30_360x.jpg?v=1736300651"  className="w-75"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>ZENANA</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-9000</span>
                          <span className="netPrice text-danger ml-2">Rs-5000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/a6ba21bf34bf4af7b4fb78b6149afb2d_360x.jpg?v=1734391757"  className="w-75"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>EILEEN FISHER</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-3500</span>
                          <span className="netPrice text-danger ml-2">Rs-1000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/f2b88a53b57342c0ba96d4b4852168f7_8cf6201c-4b4e-47f1-9aeb-6b19f0705441_360x.jpg?v=1719457261"  className="w-75"/>
                          <span className="badge badge-primary">18%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>Joseph Ribkoff </h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-20000</span>
                          <span className="netPrice text-danger ml-2">Rs-14000</span>
                        </div>
                        </div>
                      </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item productItem">
                        <div className="imgWrapper">
                          <img src="https://shop.simon.com/cdn/shop/files/b7921b6373ec426ba0010170b842f065_360x.jpg?v=1736822105"  className="w-75"/>
                          <span className="badge badge-primary">28%</span>
                          <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><IoMdHeartEmpty/></Button>
                          </div>
                        </div>
                        <div className="info">
                        <h5>ELAN</h5>
                        <span className="text-success d-block ">In Stock</span>
                        <Rating className="mt-2 mb-2 " name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                          <span className="oldPrice">Rs-10000</span>
                          <span className="netPrice text-danger ml-2">Rs-6000</span>
                        </div>
                        </div>
                      </div>``

                  </SwiperSlide>
                  
                      
                      
                      </Swiper>
                      

                </div>
                <div className="d-flex mt-5 mb-4 bannerSec">
  <div className="banner3 position-relative">
    <img 
      src="https://www.datocms-assets.com/96845/1729803349-fossil_promo_tile.png" 
      className="cursor w-100"
    />
    <div className="text3-overlay">
      <h3>EXTRO Promo</h3>
      <p>Check out the latest offers!</p>
    </div>
  </div>
  <div className="banner3 position-relative">
    <img 
      src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c4b0c238-d2fd-4da9-8219-a44c21a8d36a._CR0,0,1200,628_SX920_QL70_.png" 
      className="cursor w-100"
    />
    <div className="text3-overlay">
      <h3>Guess Factory</h3>
      <p>Check out the latest offers!</p>
      
    </div>
  </div>
</div>

            </div>
          </div>
        </div>  
      </section>
      <section className="virtual-tryon-section container py-5">
  {/* Header above cards */}
  <div className="text-center mb-4">
  <h2 className="virtual-title"><span>Experience Real-Time Try-Ons with DrapeFit</span></h2>
    <div className="price-range">In Real Time</div>
    <div className="subheader mb-3">Explore Trendy Clothing Collections</div>
    <button className="shop-now-btn">TRY NOW</button>
  </div>

  {/* Cards Row */}
  <div className="d-flex flex-wrap justify-content-between gap-4 tryon-card-wrapper">
    {/* Card 1 */}
    <div className="virtual-tryon-card">
      <video
        src="https://www.dl.dropboxusercontent.com/s/afihqbq2ruu7471rkulgn/Scarves-Video.mp4?rlkey=8sod70d1m467usw4o9ckqnzhf&amp;st=2q0yynh9&amp;dl=0"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-overlay-text">Try-On</div>
    </div>

    {/* Card 2 */}
    <div className="virtual-tryon-card">
      <video
        src="https://videos.pexels.com/video-files/5585946/5585946-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-overlay-text">Website</div>
    </div>

    {/* Card 3 */}
    <div className="virtual-tryon-card">
      <video
        src="https://public-assets.wanna.fashion/site/videos/main-page/clothes-9.mp4"
        autoPlay
        
        loop
        muted
        playsInline
      />
      <div className="video-overlay-text">Clothes</div>
    </div>
  </div>
</section>






      <section className="slider3D-section mb-4">
  <div className="container">
    <h2 className="text-center text-dark mb-4">Explore Our Latest Picks</h2>
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]} // add Autoplay here
      className="swiper-3d"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} style={{ width: "300px" }}>
          <img src={img} alt={`slide-${index}`} style={{ borderRadius: "10px", width: "100%", height: "auto" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <p className="text-white mb-1">$20 Discount on your first Order!!!</p>
              <h3 className="text-white">Visit our Website.....</h3>
              <p className="text-light">Join our email subscription now to get updates on <br/> discounts and promos
              </p>
              <div class="marg-sm-b30"></div>

<h4 class="webintern_footer_title h5"><small>Subscribe Newsletter</small></h4>
<div class="empty-space marg-lg-b20"></div>
              <form method="post">
                <div class="tt-subscribe">
<input type="text" required="" placeholder="Enter your email"></input>
<div class="tt-subscribe-submit">
<i class="fa fa-envelope" aria-hidden="true"></i>
<input type="submit" value=""></input>
</div>
</div>
</form>

            </div>
            <div className="col-md-6 ">
              <img src={banner5}/>
              
            </div>
          </div>
        </div>
      </section>

      
      
      {
        isOpenAdidas===true && <Adidas closeAdidas=
        {closeAdidas}/>
      }
      {
        isOpenBlackShirt===true && <BlackShirt closeBlackShirt=
        {closeBlackShirt}/>
      }
     
     {
        isOpenFloral===true && <Floral closeFloral=
        {closeFloral}/>
      }

    </>  

  );
};

export default Home