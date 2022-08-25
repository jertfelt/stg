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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); 
    setBlogs(newBlogs);
  }

  return ( 
    <div className="home">
      <BlogList blogs={blogs} 
      title="Alla bloggar:" 
      handleDelete={handleDelete}>
      </BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Tova" )} 
      title="Tovas bloggar:"
      handleDelete={handleDelete}/>
    </div>
    );
}

export default Home; 