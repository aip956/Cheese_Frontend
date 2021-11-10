import {useState} from "react"

function Show(props){
  // Grab the id param from match
  const id = props.match.params.id
  // Save cheese standalone variable
  const cheese = props.cheese
  // Find the cheese to show
  const cheeseIt = cheese.find((singleCheese) => {
  return singleCheese._id ===id
})

// State for our form
const [editForm, setEditForm] = useState(cheeseIt)

// handleChange function for our form
const handleChange = (event) => {
  setEditForm({...editForm, [event.target.name]: event.target.value });
};

// handleSubmit function for form submission
const handleSubmit = (event) => {
  event.preventDefault()
  props.updateCheese(editForm, cheeseIt._id)
  // Redirect back to index
  props.history.push("/")
}

const removeCheese = () => {
  props.deleteCheese(cheeseIt._id)
  // Redirect back to index
  props.history.push("/")
}

    return (
    <div className="cheeseIt">
      <h1>{cheeseIt.name}</h1>
      <h2>{cheeseIt.countryOfOrigin}</h2>
      <img src={cheeseIt.image} alt={cheeseIt.name} />
      <button onClick={removeCheese} id="delete">DELETE CHEESE</button>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
         <input
        type="text"
        value={editForm.countryOfOrigin}
        name="countryOfOrigin"
        placeholder="countryOfOrigin"
        onChange={handleChange}
        />
          <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />

      </form>
    </div>
    );
  } 
  
  export default Show