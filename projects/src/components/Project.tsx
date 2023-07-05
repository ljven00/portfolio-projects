import "../Project.scss";
import {Data} from "../App";

export default function Project({imgUrl, title, preview, previewUrl,sourceCodeUrl} : Data) {
    return (
        <section className="card">
            <figure className="img-container">
                <img src={imgUrl} alt="Project thumbnail" />
                <figcaption>{title}</figcaption>
            </figure>
            <div className="link-container">
                <a 
                    className="link source"
                    href={sourceCodeUrl}
                ><i className="fa-brands fa-github"></i> Code</a>
                { 
                    preview && 
                    <a 
                        className="link preview"
                        href={previewUrl}
                    ><i className="fa-solid fa-globe"></i> Preview</a>
                }
            </div>
        </section>
    )
}