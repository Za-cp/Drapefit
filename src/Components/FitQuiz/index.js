import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../App"; // adjust the path if needed
import "./FitQuiz.css";

const FitQuiz = ({ toggleFitQuiz, onComplete }) => {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("int");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedFit, setSelectedFit] = useState(null);
  const [selectedBodyShape, setSelectedBodyShape] = useState(null);
  const [selectedChest, setSelectedChest] = useState(null);
  const [selectedBack, setSelectedBack] = useState(null);
  const [preferredFit, setPreferredFit] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const { setFitQuizResult } = useContext(MyContext);


  const sizeOptions = {
    int: ["S", "M", "L"]
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setStep(2);
  };

  const handleFitSelect = (fit) => {
    setSelectedFit(fit);
    setStep(3);
  };

  const handleBodyShapeSelect = (shape) => {
    setSelectedBodyShape(shape);
    setStep(4);
  };

  const handleChestSelect = (chest) => {
    setSelectedChest(chest);
    setStep(5);
  };

  const handleBackSelect = (back) => {
    setSelectedBack(back);
    setStep(6);
  };

  const handlePreferredFitSelect = async (fit) => {
    setPreferredFit(fit);

    const fitData = {
      size: selectedSize,
      fit: selectedFit,
      bodyShape: selectedBodyShape,
      chest: selectedChest,
      back: selectedBack,
      preferredFit: fit,
    };

  // ✅ Save to context
  setFitQuizResult(fitData);

    try {
      const response = await axios.post("http://localhost:5000/api/fitquiz", fitData);
      if (response.status === 200) {
        alert("✅ FitQuiz submitted successfully!");
      } else {
        alert("⚠️ Error submitting FitQuiz");
      }
    } catch (error) {
      console.error("Error submitting FitQuiz:", error);
      alert("⚠️ Error submitting FitQuiz");
    }

    const finalSize = determineModelSize(fitData);
    if (onComplete) onComplete(finalSize);
    console.log("📦 Final Model Size to Load:", finalSize);

    closeQuiz();
  };

  const determineModelSize = ({ size, bodyShape, chest, back }) => {
    // Priority logic: majority = small -> small, etc.
    const features = [size, bodyShape, chest, back];
    const smallCount = features.filter((val) => ["S", "slim", "small"].includes(val)).length;
    const largeCount = features.filter((val) => ["L", "round", "broad"].includes(val)).length;

    if (smallCount >= 3) return "small";
    if (largeCount >= 3) return "large";
    return "medium";
  };

  const closeQuiz = () => {
    setIsOpen(false);
    if (toggleFitQuiz) toggleFitQuiz();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="quiz-overlay" onClick={closeQuiz}></div>
      <div className="quiz-container">
        <button className="close-btn" onClick={closeQuiz}>✖</button>

        {step === 1 && (
          <>
            <h3>Take our Fit quiz</h3>
            <h2>What dress size do you usually wear?</h2>
            <div className="tabs">
              {["int"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? "active" : ""}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="size-options">
              {sizeOptions[activeTab].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Take our Fit quiz</h3>
            <h2>Do you always wear this size?</h2>
            <button className="option-btn" onClick={() => handleFitSelect("smaller")}>
              No, I sometimes wear a smaller size
            </button>
            <button className="option-btn" onClick={() => handleFitSelect("exact")}>
              Yes
            </button>
            <button className="option-btn" onClick={() => handleFitSelect("bigger")}>
              No, I sometimes wear a bigger size
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Take our Fit quiz</h3>
            <h2>What do you think is most like you?</h2>
            <div className="body-shape-options">
              <button className="body-btn" onClick={() => handleBodyShapeSelect("slim")}>
                <img src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee757f0fff23db587756365_Body%20Shapes%20Measurements%201.webp" alt="Slim" />
                <p>Slim</p>
              </button>
              <button className="body-btn" onClick={() => handleBodyShapeSelect("medium")}>
                <img src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60c8c0248738a135a50409e1_Pear%20Body%20Shape%20Category%20Image.webp" alt="Medium" />
                <p>Medium</p>
              </button>
              <button className="body-btn" onClick={() => handleBodyShapeSelect("round")}>
                <img src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee9442a0258fa44591cb4bf_Apple%20Body%20Shape%201-p-500.webp" alt="Round" />
                <p>Round</p>
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Take our Fit quiz</h3>
            <h2>How would you describe your chest?</h2>
            <div className="body-shape-options">
              <button className="body-btn" onClick={() => handleChestSelect("slim")}>
                <p>Slim</p>
              </button>
              <button className="body-btn" onClick={() => handleChestSelect("medium")}>
                <p>Medium</p>
              </button>
              <button className="body-btn" onClick={() => handleChestSelect("broad")}>
                <p>Broad</p>
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Take our Fit quiz</h3>
            <h2>How would you describe your back?</h2>
            <div className="body-shape-options">
              <button className="body-btn" onClick={() => handleBackSelect("small")}>
                <img src="/assets1/back body1.jpg" alt="Slim" />
                <p>Slim</p>
              </button>
              <button className="body-btn" onClick={() => handleBackSelect("medium")}>
                <img src="/assets1/back body2.jpg" alt="Medium" />
                <p>Medium</p>
              </button>
              <button className="body-btn" onClick={() => handleBackSelect("round")}>
                <img src="/assets1/back body3.jpg" alt="Broad" />
                <p>Round</p>
              </button>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <h3>Take our Fit quiz</h3>
            <h2>What fit would you prefer for this item?</h2>
            <button className="option-btn" onClick={() => handlePreferredFitSelect("Slim fit")}>
              Slim fit
            </button>
            <button className="option-btn" onClick={() => handlePreferredFitSelect("Regular fit")}>
              Regular fit
            </button>
            <button className="option-btn" onClick={() => handlePreferredFitSelect("Loose fit")}>
              Loose fit
            </button>
          </>
        )}

        <p className="footer-text">Powered by DrapeFit</p>
      </div>
    </>
  );
};

export default FitQuiz;
