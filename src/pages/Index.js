import { useState } from "react";
import { Link } from "react-router-dom"


function Index(props){
// State to hold formData
const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: "",
});

// handleChange function for form
const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
};

// Handle submit function for form
const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
        name: "",
        countryOfOrigin: "",
        image: "",
    });
};

// Loaded function
const loaded = () => {
    
      return props.cheese.map((cheese) => (
        <div key={cheese._id} className="cheese" >
            <Link to={`/cheese/${cheese._id}`}><h1>{cheese.name}</h1></Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.title}</h3>
        </div>
    ));
   
};

const loading = () => {
    return <h1>Loading cheese!</h1>
};
return (
    <section>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newForm.name}
            name="name" 
            required
            placeholder="name"
            onChange={handleChange}
            />

            <input
            type="text"
            value={newForm.countryOfOrigin}
            name="countryOfOrigin"
            required
            placeholder="countryOfOrigin"
            onChange={handleChange}
            />

            <input
            type="text"
            value={newForm.image}
            name="image"
            required
            placeholder="image URL"
            onChange={handleChange}
            />
<input type="submit" value="Create Cheese" />
        </form>
        <div className="cheeseList"> 
            {props.cheese ? loaded() : loading()}
        </div>
    </section>
); 
} 
  
  export default Index