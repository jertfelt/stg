import { useState } from "react";

const Home = () => {
  // let name ="Tova"; 
  const [name, setName] = useState("Tova");
  const [age, setAge] = useState(32);

  const handleClick = (e) => {
    console.log("Yaaay you clicked", e)
    // name = "Oskar" 
    // console.log(name)
    setName("Oskar")
    setAge("36");
  }

  return ( 
    <div className="home">
    <h2>Homepage</h2>
    <p> {name} is {age} years old </p>
    <button onClick={handleClick}>Click me! Click meeee!</button>
    
    </div>
    );
}

export default Home; 