import { useRef, useState, useContext } from "react";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { IoIosCloseCircle, IoIosHeartEmpty } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from "../QuantityBox";
import { MyContext } from "../../App";
import FitQuiz from "../FitQuiz";
import ModelViewer from "../ModelViewer";

const BlackShirt = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showFitQuiz, setShowFitQuiz] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [uploadedImageName, setUploadedImageName] = useState(null);
  const [selectedShirtIndex, setSelectedShirtIndex] = useState(0);
  const [modelSize, setModelSize] = useState("small");
  const [modelSizeLabel, setModelSizeLabel] = useState(null);

  const zoomSliderThumbs = useRef();
  const fileInputRef = useRef();
  const context = useContext(MyContext);

  const shirtTextures = ["/assets1/shirt15.jpg"];
  const mainShirtImage = "/assets1/shirt2.png";

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && ['image/jpeg', 'image/png'].includes(file.type)) {
      setUploadedImageName(file.name.toLowerCase());
      alert("✅ Image uploaded successfully!");
    } else {
      alert("❌ Invalid file type!");
    }
  };

  const goto = (index) => {
    setSlideIndex(index);
    setSelectedShirtIndex(index);
  };

  const getModelPath = () => {
    if (uploadedImageName === "female.png") {
      alert("👩‍🦰 Female face detected! Switching to personalized 3D model.");
      return `/model/${modelSize}1.glb`;
    } else if (uploadedImageName) {
      alert("⚠️ No personalized model available for this image. Showing your original FitQuiz-based model.");
    }
    return `/model/${modelSize}.glb`;
  };

  return (
    <>
      <Dialog open={true} className="Adidas" maxWidth="md" fullWidth onClose={props.closeBlackShirt}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <Button className='close_' onClick={props.closeBlackShirt}>
          <IoIosCloseCircle size={24} />
        </Button>

        <h2 className="mb-1 font-weight-bold px-3 pt-3">Multi Real T-shirt</h2>

        <div className="d-flex align-items-center px-3">
          <span className="mr-2">Brand: <b>Adidas</b></span>
          <Rating name="read-only" value={5} readOnly />
        </div>

        <hr />

        <div className="row viewAdidas px-3 pb-4">
          {/* Left Side */}
          <div className="col-md-5">
            <div className="productZoom position-relative mb-3">
              <div className="badge badge-primary">20%</div>
              <div className="main-shirt-display">
                <InnerImageZoom
                  src={mainShirtImage}
                  zoomType="hover"
                  zoomScale={1.2}
                  zoomPreload
                  className="rounded"
                />
              </div>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              navigation={false}
              modules={[Navigation]}
              className="zoomSliderThumbs"
              ref={zoomSliderThumbs}
            >
              {shirtTextures.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className={`item ${slideIndex === index ? 'item-active' : ''}`}>
                    <img
                      src={img}
                      className="w-100 rounded cursor-pointer border"
                      onClick={() => goto(index)}
                      style={{
                        padding: "5px",
                        border: slideIndex === index ? "2px solid #007bff" : "1px solid #ddd"
                      }}
                      alt={`thumb-${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side */}
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice mr-2 text-muted" style={{ fontSize: "18px" }}>Rs-1000.00</span>
              <span className="netPrice text-danger" style={{ fontSize: "20px", fontWeight: "bold" }}>Rs-790.00</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>

            <p className="mt-3">
              Make any outfit instantly cool by pairing it with blue jeans. Handmade work to make it look more comfort and classy.
            </p>

            <div className="d-flex align-items-center mt-4">
              <QuantityBox />
              <Button className="btn-blue btn-lg ml-3">Add to Cart</Button>
            </div>

            <div className="d-flex align-items-center mt-4 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <IoIosHeartEmpty /> &nbsp; Add to Wishlist
              </Button>

              <Button className="btn-round btn-sml ml-3" variant="outlined" onClick={() => setShowFitQuiz(prev => !prev)}>
                <FaWpforms /> &nbsp; Questionnaire
              </Button>

              <Button className="btn-round btn-sml ml-3" variant="outlined" onClick={() => fileInputRef.current.click()}>
                <RxUpload /> &nbsp; Upload Image
              </Button>

              <Button variant="outlined" className="btn-round btn-sml ml-3" onClick={() => setShowModel(prev => !prev)}>
                3D Model
              </Button>
            </div>

            {/* FitQuiz Modal */}
            {showFitQuiz && (
              <FitQuiz
                toggleFitQuiz={() => setShowFitQuiz(prev => !prev)}
                onComplete={(finalSize) => {
                  console.log("✅ Size chosen from FitQuiz:", finalSize);
                  setModelSize(finalSize);
                  setModelSizeLabel(finalSize);
                  setShowModel(true);
                }}
              />
            )}

            {/* 3D Model Viewer */}
            {showModel && (
              <div className="mt-4">
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                  }}
                >
                  <ModelViewer
                    modelPath={getModelPath()}
                    shirtTexture={shirtTextures[selectedShirtIndex]}
                    modelSizeLabel={modelSize}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default BlackShirt;
