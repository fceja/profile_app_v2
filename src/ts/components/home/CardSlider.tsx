import "@scss/components/home/CardSlider.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const cards =
  [
    {
      image: "https://picsum.photos/200/300",
      title: "Title 1",
      description: "This is description 1",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/201/300",
      title: "Title 2",
      description: "This is description 2",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/202/300",
      title: "Title 3",
      description: "This is description 3",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/203/300",
      title: "Title 4",
      description: "This is description 4",
      urlLink: "https://google.com",
    },
  ]

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
        {cards.map((slide, index) => {
          return (
            <div key={index} className="card">
              <a href={slide.urlLink} target="_blank" rel="noreferrer">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              </a>
              <p className="card-title">{slide.title}</p>
              <p className="card-description">{slide.description}</p>
            </div>
          );
        })}
      </div>
      <MdChevronRight className="right-slider-icon" onClick={() => { handleClick('right') }} />
    </div>
  );
};

export default CardSlider;
