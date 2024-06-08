import "@scss/pages/HomePage.scss";
import Hero from "@components/home/Hero"

export default function HomePage() {
    return (
        <div className="home-page-div">
            <Hero />
            <div className="main-div">Main Div</div>
        </div>
    );
}
