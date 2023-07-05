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
  description: string
}

const projects: Data[] = [
  {
    imgUrl: sketch,
    title: "Etch a Sketch",
    preview: true,
    previewUrl: "http://ljven-etch-a-sketch.netlify.app/",
    sourceCodeUrl: "https://github.com/ljven00/OdinProject/tree/main/etch-a-sketch",
    description: "Are you okay"
  },
  {
    imgUrl: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
    title: "Fruits Count",
    preview: true,
    previewUrl: "",
    sourceCodeUrl: "",
    description: "Hello Dear"
  },
  {
    imgUrl: passGen,
    title: "Password Generator",
    preview: true,
    previewUrl: "https://ljven-password-generator.netlify.app/",
    sourceCodeUrl: "https://github.com/ljven00/ScrimbaProjects/tree/main/PasswordGenerator",
    description: "This is Jean"
  },
  {
    imgUrl: fruitShelf,
    title: "Fruits Shelf",
    preview: true,
    previewUrl: "",
    sourceCodeUrl: "",
    description: "Are you okay"
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
          description = {value.description}
        />)
      }
    </main>
  )
}

export default App;
export type { Data };
