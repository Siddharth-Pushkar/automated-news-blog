import { useState } from "react";


const Home = () => {

    // if you want to changes the value of a variable, you can use something called state. State is a way to store data in a component that can change over time. You can use the useState hook to create state variables in a functional component. For example, you can create a state variable called "count" and a function to update it like this:
    // useState is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. You can use array destructuring to assign these values to variables. For example, you can create a state variable called "count" and a function to update it like this:

    const [name , setName] = useState("Siddharth"); // This is a state variable that contains a string

    // name is the current value of the state variable, and setName is a function that can be used to update the value of name. When you call setName with a new value, React will re-render the component with the new value of name.

    // now we can set a button that once clicked, will change the value of name to something else.

    // const links = "https://siddharthpushportfolio.netlify.app"; // This is a string that contains a link to a website

    const handelClick = () => {

        setName("Siddharth Pushkar"); // This will change the value of name to "Siddharth Pushkar"

    }

    const handelClickAgain = (name) => {
        console.log("Clicked by " + name);
        setName("Siddharth"); // This will change the value of name to "Siddharth Pushkar"
    }

    return ( 
        <div className="home">
            <h1>Welcome to the Home Page</h1>

            <p>This website is owned and created by { name }</p>
            <button onClick={handelClick}>Click me!</button>
            <button onClick={() => handelClickAgain("Siddharth")}>Click me again!</button>
            {/* Here we have the second button inside an anonymous function so it doesn't execute immediately */}
        </div>
     );
}
 
export default Home;