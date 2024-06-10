import "@scss/components/home/CardSlider.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const cards =
  [
    {
      image: "src/assets/clients/PaniniKabobGrill.png",
      title: "Title 1",
      description: "Panini Kabob Grill",
      urlLink: "https://paninikabobgrill.com/",
    },
    {
      image: "src/assets/PopsAndSonsElectricLogo.png",
      title: "Pops & Sons",
      description: "Test",
      urlLink: "todo",
    },
    {
      image: "src/assets/PopsAndSonsElectricLogo.png",
      title: "Pops & Sons",
      description: "Test",
      urlLink: "todo",
    },
    {
      image: "src/assets/PopsAndSonsElectricLogo.png",
      title: "Pops & Sons",
      description: "Test",
      urlLink: "todo",
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
              <a className="card-link-container" href={slide.urlLink} target="_blank" rel="noreferrer">
                <img
                  className="card-image"
                  src={slide.image}
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
