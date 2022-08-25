import { useState, useEffect } from "react";
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
  const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")
  
  //data: blogs -vi använder data men döper om det till blogs i den här kontexten
  return ( 
    <div className="home">
      {error && <div>{error}</div>}
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