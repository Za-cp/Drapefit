import { useContext, useRef, useState } from "react";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { IoIosCloseCircle, IoIosHeartEmpty } from "react-icons/io";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from "../QuantityBox";
import { MyContext } from "../../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { FaWpforms } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
import FitQuiz from "../FitQuiz";
import ModelViewer from "../ModelViewer";


const ProductModal = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showFitQuiz, setShowFitQuiz] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedShirtIndex, setSelectedShirtIndex] = useState(0);
  const [modelSize, setModelSize] = useState("small");
  const { fitQuizResult } = useContext(MyContext);
  const [modelSizeLabel, setModelSizeLabel] = useState(null);
  const [modelPath, setModelPath] = useState("/model/small.glb");
  const [usePersonalizedModel, setUsePersonalizedModel] = useState(false);



  const zoomSliderBig = useRef();
  const zoomSliderThumbs = useRef();
  const fileInputRef = useRef(null);
  const context = useContext(MyContext);

  const shirtTextures = [
    "/assets1/shirt7.webp",
    "/assets1/shirt8.jpg",
    "/assets1/shirt9.webp",
  ];
  // Add this line after your shirtTextures array
const mainShirtImage = "/assets1/shirt1.png"; // Your fixed shirt display image

  const modelSources = {
    small: "/model/small.glb",
    medium: "/model/medium.glb",
    large: "/model/large.glb",
  };

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Image uploaded successfully!');
      setUploadedImage(`http://localhost:5000${data.filePath}`);

      const fileName = file.name.toLowerCase();

      if (fileName === 'female.png') {
        alert('👩‍🦰 Female face detected! Switching to personalized 3D model.');
        setUsePersonalizedModel(true); // ✅ Enable custom model
      } else {
        alert('⚠️ No personalized model available for this image.\nDefault FitQuiz model will be shown.');
        setUsePersonalizedModel(false); // ✅ Keep FitQuiz model
      }

    } else {
      alert(data.message || '❌ Upload failed');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    alert('❌ Something went wrong');
  }
};

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert("❌ Invalid file type! Please upload a JPEG or PNG image.");
        return;
      }
      handleUpload(file);
    }
  };

  const handleShirtClick = (index) => {
    setSelectedShirtIndex(index);
    setSlideIndex(index);
  };
  const [selectedModelSize, setSelectedModelSize] = useState("small");


  // Callback from FitQuiz
 const handleFitQuizComplete = (size) => {
  setSelectedModelSize(size);      // existing
  setModelSizeLabel(size);         // new
};


  const getModelBasedOnFit = () => {
  if (!fitQuizResult) return "/model/small.glb"; // default fallback

  const { size, bodyShape, chest, back } = fitQuizResult;

  // You can adjust logic to be more precise
  if (size === "S" && bodyShape === "slim" && chest === "slim" && back === "small") {
    return "/model/small.glb";
  }
  if (size === "M" && (bodyShape === "medium" || chest === "medium")) {
    return "/model/medium.glb";
  }
  if (size === "L" || bodyShape === "round" || chest === "broad" || back === "round") {
    return "/model/large.glb";
  }

  return "/model/large.glb"; // fallback to medium
};


  return (
    <Dialog
      open={true}
      className="productModal"
      onClose={() => context.setIsOpenProductModal(false)}
      maxWidth="lg"
      fullWidth
    >
      <input
        type="file"
        accept="image/jpeg, image/png"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <Button className="close_" onClick={() => context.setIsOpenProductModal(false)}>
        <IoIosCloseCircle size={24} />
      </Button>

      <h2 className="mb-1 font-weight-bold px-3 pt-3">Sark T-shirt</h2>

      <div className="d-flex align-items-center px-3">
        <span className="mr-2">Brand: <b>Adidas</b></span>
        <Rating name="read-only" value={5} readOnly />
      </div>

      <hr />

      <div className="row mt-2 productDetailModal px-3 pb-4">
        {/* Left Section */}
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
                    onClick={() => handleShirtClick(index)}
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

        {/* Right Section */}
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            <span className="oldPrice mr-2 text-muted" style={{ fontSize: "18px" }}>Rs-1000.00</span>
            <span className="netPrice text-danger" style={{ fontSize: "20px", fontWeight: "bold" }}>Rs-790.00</span>
          </div>
          <span className="badge bg-success">IN STOCK</span>

          <p className="mt-3">
            Make any outfit instantly cool by pairing it with this bomber jacket. Here provide you design with 3 different unique and versatile colors. Do try and enjoy.
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

            <Button className="btn-round btn-sml ml-3" variant="outlined" onClick={handleUploadClick}>
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
                      setShowModel(true); // Optional: automatically open model viewer
                    }}
                  />
                )}


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
      }}
    >

      <ModelViewer
  modelPath={
    usePersonalizedModel
      ? `/model/${modelSize}1.glb`
      : `/model/${modelSize}.glb`
  }
  shirtTexture={shirtTextures[selectedShirtIndex]}
  modelSizeLabel={modelSize}
/>


    </div>
  </div>
)}

        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
