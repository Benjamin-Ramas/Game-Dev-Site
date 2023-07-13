import SectionTitle from "./components/SectionTitle";

export default function ContactMe() {
    return(
        <div className="namedSection" id="contact-me">
            <SectionTitle title="3. Contact Me"/>
            <p>I am currently in search for a job in game development. Although my inbox is always open to any inquiry you may have.</p>
            <a href={`mailto:benramas911@gmail.com`}>
                <button>Send me an Email</button>
            </a>
        </div>
    )
}