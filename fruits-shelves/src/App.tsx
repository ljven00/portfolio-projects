import { useState } from 'react';
import Shelf from './components/Shelf';
import NewShelf from './components/NewShelf';

const fruits = [
  {
      name: "Apple (Green)",
      icon:  "🍏"
  },
  {
      name: "Apple (Red)",
      icon:  "🍎"
  },
  {
      name: "Avocado",
      icon:  "🥑"
  },
  {
      name: "Banana",
      icon:  "🍌"
  },
  {
      name: "Blueberry",
      icon:  "🫐"
  },
  {
      name: "Cherry",
      icon:  "🍒"
  },
  {
      name: "Grapes",
      icon:  "🍇"
  },
  {
      name: "Kiwi",
      icon:  "🥝"
  },
  {
      name: "Lemon",
      icon:  "🍋"
  },
  {
      name: "Lime",
      icon:  "🍋"
  },
  {
      name: "Mango",
      icon:  "🥭"
  },
  {
      name: "Melon",
      icon:  "🍉"
  },
  {
      name: "Orange",
      icon:  "🍊"
  },
  {
      name: "Peache",
      icon:  "🍑"
  },
  {
      name: "Pear",
      icon:  "🍐"
  },
  {
      name: "Pineapple",
      icon:  "🍍"
  },
  {
      name: "Strawberry",
      icon:  "🍓"
  },
  {
      name: "Tangerine",
      icon:  "🍊"
  }
];

const vegetables = [
  { 
      name: "Bean",
      icon: "🫛"
  },
  { 
      name: "Broccoli",
      icon: "🥦"
  },
  { 
      name: "Cabbage",
      icon: "🥬"
  },
  { 
      name: "Carrot",
      icon: "🥕"
  },
  { 
      name: "Corn",
      icon: "🌽"
  },
  { 
      name: "Cucumber",
      icon: "🥒"
  },
  { 
      name: "Garlic",
      icon: "🧄"
  },
  { 
      name: "Mushroom",
      icon: "🍄"
  },
  { 
      name: "Onion",
      icon: "🧅"
  },
  { 
      name: "Pepper",
      icon: "🫑"
  },
  { 
      name: "Potato",
      icon: "🥔"
  },
  { 
      name: "Tomato",
      icon: "🍅"
  }
];

function App() {
  const [content, setContent] = useState([]);
  return (
    <main id='main'>
      {
        content.map((e: string) => (
          <Shelf 
            key={e}
            updateShelf={setContent}
            name={e.substring(0, e.length - 2)}
            icon={e.substring(e.length - 2)}
          />
        ))
      }
      <NewShelf  
        fruits={fruits} vegetables={vegetables} 
        updateShelf={setContent} //updateProduct={setProduct}
      />
    </main>
  )
}

export default App;
