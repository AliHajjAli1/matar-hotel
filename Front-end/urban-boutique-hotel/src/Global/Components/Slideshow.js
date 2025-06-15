import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Slideshow = ({ data, type }) => {
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={type === "Room" ? "slideshow rooms" : "slideshow"}>
      <div className="arrow left-arrow" onClick={goToPrevious}>
        <FaAngleDown />
      </div>

      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {data.map((item, idx) => (
          <div className="slide" key={idx}>
            <div className={type === "Room" ? "slide-content rooms" : "slide-content"}>
              <img src={item.image_url} alt="" className="slide-image" />
              <div className="slide-info">
                <h2 className="slide-title">{item.title}</h2>
                <p className="slide-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow right-arrow" onClick={goToNext}>
        <FaAngleUp />
      </div>

      <div className="slideshowDots">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={
              type === "Room"
                ? `slideshowDot rooms${index === idx ? " active" : ""}`
                : `slideshowDot${index === idx ? " active" : ""}`
            }
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
