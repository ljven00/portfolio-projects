import "../Project.scss";
import Popup from "./Popup.tsx";

interface Props {
    url: string;
    title: string;
    preview: boolean;
}

export default function Project({url, title, preview} : Props) {

    return (
        <section className="card">
            <figure className="img-container">
                <img src={url} alt="Project thumbnail" />
                <figcaption>{title}</figcaption>
            </figure>
            <div className="btn-container">
                <a className="link source">Source Code</a>
                { preview && <a className="link preview">Live Preview</a>}
                <button className="btn desc" onClick={() => {
                return <Popup />}
                }>Description</button>
            </div>
        </section>
    )
}