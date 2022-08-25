import { useState } from "react";
import BlogList from "./BlogList"
const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "Blogga blogga med min kärlek", 
    body:"Lorem ipsum...", 
    author:"Tova", 
    id: 4},
    {title: "Kolla en blogg", 
    body:"Lorem ipsum...", 
    author:"Oskar", 
    id: 1},
    {title: "Kolla en till blogg", 
    body:"Lorem ipsum...", 
    author:"Jonas", 
    id: 2},
    {title: "Kolla min blogg dåråå", 
    body:"Lorem ipsum...", 
    author:"Tova", 
    id: 3}
  ])

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="Alla bloggar:"></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Tova" )} title="Tovas bloggar:"></BlogList>
    </div>
    );
}

export default Home; 