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
    
    // const cheesesList =
    // newForm.map((cheese) => (
    //     console.log(newForm)
    //     <div className="cheese">
    //         <h1>{cheese.name}
    //         </h1>
    //         <img src={cheese.image} />
    //         <h2>{cheese.countryOfOrigin}</h2>
    //     </div>
    // ))
    // return (
    //     <div className="cheeseList">
    //         {cheesesList}
    //     </div>
    // )
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
            placeholder="name"
            onChange={handleChange}
            />

            <input
            type="text"
            value={newForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="countryOfOrigin"
            onChange={handleChange}
            />

            <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />
<input type="submit" value="Create Cheese" />
        </form>
        {props.cheese ? loaded() : loading()}
    </section>
); 
} 
  
  export default Index