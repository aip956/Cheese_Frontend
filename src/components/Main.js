import {useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
const [cheese, setCheese] = useState(null);

const URL = "https://i-want-cheese.herokuapp.com/cheese";

const getCheese = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCheese(data);
};

const createCheese = async (cheese) => {
    // Make post request to create cheese!
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            },
            body:JSON.stringify(cheese),
    });
    // Update cheese list
    getCheese();
    console.log(getCheese);
};

const updateCheese = async (cheese, id) => {
    // Make a put request to update cheese
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cheese)
    })
    getCheese()
}

const deleteCheese = async (id) => {
    //  Make the delete request
    await fetch(URL + id, {
        method: "delete"
    })
    getCheese()
}

useEffect(() => getCheese(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index cheese={cheese} createCheese={createCheese} />
                </Route>
                
                <Route
                path="/cheese/:id"
                render={(rp) => (
                <Show
                {...rp}
                cheese={cheese}
                updateCheese={updateCheese}
                deleteCheese={deleteCheese}
                />
                )}
                />
            </Switch>
        </main>
    );
    
  } 
  
  export default Main