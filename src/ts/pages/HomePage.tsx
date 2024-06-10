import "@scss/pages/HomePage.scss";
import Hero from "@components/home/Hero"
import CardSlider from "@components/home/CardSlider"

export default function HomePage() {
    return (
        <div className="home-page-div">
            <Hero />
            <div className="content-div">
                <section className="comp-info">
                    <span className="statement">
                        Trusted experts in residential and commercial electrical services. <br /> Ensuring quality and safety for your home or business.
                    </span>
                    <span className="serv">
                        <div className="serv-title"><i>Services provided</i>: </div>
                        <div className="serv-list">lighting, panel, outlets, wiring / re-wiring, maintenance, repairs, inspections, commercial kitchen, HVAC, electrical room, backup power. Don&#39;t see the service you&#39;re looking for? Please ask!</div>
                    </span>
                </section>
                <section>
                    <div className="clients"><i>Clients worked for:</i></div>
                    < CardSlider />
                </section>
            </div>
        </div>
    );
}
