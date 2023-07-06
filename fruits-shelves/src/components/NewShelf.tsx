
interface Data {
    name: string,
    icon: string
}

interface Props {
    fruits: Data[],
    vegetables: Data[],
    updateShelf: any,
}

export default function NewShelf({fruits, vegetables, updateShelf}: Props) {
    return(
    <div className="new-shelf">
        <label htmlFor="new-shelf">New Shelf </label>
        <select name="new-shelf" id="new-shelf"
            onChange={(e) => {
                let val = e.target.value;
                updateShelf((prev: any) => [...prev, val]);
            }
            }
        >
            <optgroup label="Fruits">
            {
                fruits.map((fruit: Data, index: Number) => 
                    <option 
                        id={"f" + index} 
                        key={"Fruit " + index.toString()} 
                        value={fruit.name + " " + fruit.icon}
                    >
                        {fruit.name + " " + fruit.icon}
                    </option>
                )
            }
            </optgroup>
            <optgroup label="Vegetables">
                {
                    vegetables.map((vegetable: Data, index: Number) => 
                        <option id={"v" + index} key={"Vegetable " + index.toString()} value={vegetable.name + " " + vegetable.icon}>{vegetable.name + " " + vegetable.icon}</option>
                    )
                }
            </optgroup>
        </select>
    </div>
    );
}