import "@scss/components/home/CardSlider.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cardsContent } from "@content/HomeContent"

const CardSlider = () => {
  const handleClick = (direction: string) => {
    const slider = document.getElementById("slider");
    if (!slider) throw new Error('Expected slider.')

    if (direction === "left") {
      slider.scrollLeft = slider.scrollLeft - 300;
    }
    else if (direction === "right") {
      slider.scrollLeft = slider.scrollLeft + 300;
    }
    else {
      throw new Error('Invalid direction.')
    }
  }

  return (
    <div id="main-slider-container">
      <MdChevronLeft className="left-slider-icon" onClick={() => { handleClick('left') }} />
      <div id="slider">
        {cardsContent.map((slide, index) => {
          return (
            <div key={index} className="card d-flex align-items-center justify-content-center">
              <a className="card-link-container" href={slide.urlLink} target="_blank" rel="noreferrer">
                <img
                  className="card-image"
                  src={slide.imageUrl}
                  alt={slide.alt}
                ></img>
              </a>
            </div>
          );
        })}
      </div>
      <MdChevronRight className="right-slider-icon" onClick={() => { handleClick('right') }} />
    </div>
  );
};

export default CardSlider;
