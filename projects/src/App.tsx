import Project from "./components/Project";
import Popup from "./components/Popup";
import "./App.scss";

function App() {
  return (
    <main id="main">
      <Project 
        url = "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg"
        title = "Fruits Count"
        preview = {true}
      />
      <Project 
        url = "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg"
        title = "Fruits Count"
        preview = {true}
      />
      <Project 
        url = "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg"
        title = "Fruits Count"
        preview = {false}
      />
    </main>
  )
}

export default App
