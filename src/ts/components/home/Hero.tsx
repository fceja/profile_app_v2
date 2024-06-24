import "@scss/components/home/Hero.scss";

const Hero = () => {
    return (
        <div className="hero-div">
            <div className="left-right-div">
                <div className="left-div">
                    <div className="heading-div">Get the <br />job done.<br /> Right.</div>
                    <div className="hero-logo-container">
                        <img className="hero-logo" src="images/PopsAndSonsElectricLogo.png" alt="pops-and-sons-logo" />
                    </div>
                </div>
                <div className="right-div">
                    <div className="trapezoid-img-div">
                        <img
                            className="img-main"
                            src="images/temp_4x3.png"
                            alt="test"
                        />
                    </div>
                </div>
            </div>
            <div className="trapezoid-background-div"></div>
        </div>
    )
}
export default Hero