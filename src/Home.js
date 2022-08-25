import { useState, useEffect } from "react";
import BlogList from "./BlogList"
const Home = () => {
  const [blogs, setBlogs] = useState([
    
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); 
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("useEffect runs");
   
  }, []);
  //nu blir name en dependency!

  return ( 
    <div className="home">
      <BlogList blogs={blogs} 
      title="Alla bloggar:" 
      handleDelete={handleDelete}>
      </BlogList>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Tova" )} 
      title="Tovas bloggar:"
      handleDelete={handleDelete}/> */}
 
    </div>
    );
}

export default Home; 