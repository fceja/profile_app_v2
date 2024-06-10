import "@scss/pages/HomePage.scss";
import Hero from "@components/home/Hero"

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
                        <div className="serv-list">lighting, panel, outlets, wiring / re-wiring, maintenance, repairs, inspections, commercial kitchen, HVAC, electrical room, backup power. Don't see the service you're looking for? Please ask!</div>
                    </span>
                </section>
                <section className="clients">
                    <div>Some of our clients:</div>
                    <div>Company A, Company B, Company C</div>
                </section>
            </div>
        </div>
    );
}
