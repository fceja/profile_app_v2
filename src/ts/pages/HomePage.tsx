import "@scss/pages/HomePage.scss";

export default function HomePage() {
    return (
        <div className="home-page-container mt-3 mb-3">
            <div className="message-div text-center">
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="bullets-div">
                <div className="img-gradient-div">
                    <div className="gradient" />
                    <img
                        className="img-main"
                        src="src/assets/temp_4x3.png"
                        alt="temp-image"
                    />
                </div>
                <div className="sub-text mt-3">
                    <ul>
                        <li>Residential</li>
                        <li>Commercial</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
