import { useState, useEffect } from "react";
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

  const [name, setName] =useState("Daniel");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); 
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("useEffect runs");
    // console.log(blogs);
    console.log(name)
  }, [name]);
  //nu blir name en dependency!

  return ( 
    <div className="home">
      <BlogList blogs={blogs} 
      title="Alla bloggar:" 
      handleDelete={handleDelete}>
      </BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Tova" )} 
      title="Tovas bloggar:"
      handleDelete={handleDelete}/>
      <button onClick={() => setName("Simon")}>Byt namn</button>
      <p>{name}</p>
    </div>
    );
}

export default Home; 