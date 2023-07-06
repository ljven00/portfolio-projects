import Project from "./components/Project";
import "./index.scss";
import fruitShelf from "./assets/fruit-shelf.png";
import passGen from "./assets/pass-gen.png";
import sketch from "./assets/sketch.png";

interface Data {
  imgUrl: string;
  title: string;
  preview: boolean;
  previewUrl: string,
  sourceCodeUrl: string,
}

const projects: Data[] = [
  {
    imgUrl: sketch,
    title: "Etch a Sketch",
    preview: true,
    previewUrl: "http://ljven-etch-a-sketch.netlify.app/",
    sourceCodeUrl: "https://github.com/ljven00/OdinProject/tree/main/etch-a-sketch"
  },
  {
    imgUrl: passGen,
    title: "Password Generator",
    preview: true,
    previewUrl: "https://ljven-password-generator.netlify.app/",
    sourceCodeUrl: "https://github.com/ljven00/ScrimbaProjects/tree/main/PasswordGenerator"
  },
  {
    imgUrl: fruitShelf,
    title: "Fruits Shelf",
    preview: true,
    previewUrl: "",
    sourceCodeUrl: ""
  }
]

function App() {
  return (
    <main id="main">
      {
        projects.map((value) => <Project 
          key={value.title}
          imgUrl = {value.imgUrl}
          title = {value.title}
          preview = {value.preview}
          previewUrl = {value.previewUrl}
          sourceCodeUrl = {value.sourceCodeUrl}
        />)
      }
    </main>
  )
}

export default App;
export type { Data };
