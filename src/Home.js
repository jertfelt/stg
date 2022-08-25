import { useState, useEffect } from "react";
import BlogList from "./BlogList"
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setisLoading] = useState(true);

 
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
    .then(res => {
      return res.json()
    })
    .then((data) => {
      //array of data:
      // console.log(data)
      setBlogs(data);
      setisLoading(false) 
    })
    console.log("useEffect runs");
  }, []);
  

  return ( 
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} 
      title="Alla bloggar:" 
      >
      </BlogList> }
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Tova" )} 
      title="Tovas bloggar:"
      handleDelete={handleDelete}/> */}
 
    </div>
    );
}

export default Home; 