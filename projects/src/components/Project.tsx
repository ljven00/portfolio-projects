import { useState } from "react";
import "../Project.scss";
import {Data} from "../App";

export default function Project({imgUrl, title, preview, previewUrl,sourceCodeUrl, description} : Data) {
    // const [toggle, setToggle] = useState(false);
    // function handleToggle(){
    //     if(toggle)
    //         setToggle(false);
    //     else
    //         setToggle(true);
    // }
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
                {/* <button 
                    className="btn desc" 
                    onClick={handleToggle}
                >Description</button> */}
            </div>
            {
                // toggle &&
                // <p>{description}</p>
            }
        </section>
    )
}