import { useState, useEffect } from "react";
import BlogList from "./BlogList"
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
    .then(res => {
      // console.log(res)
      //ok: true fetch is ok, we get data back
      if(!res.ok){
        throw Error("Kunde inte ladda innehållet, prova att refresha hemsidan, eller hör av dig till sidans administratör.") //*syns i console log
      }
      return res.json()
    })
    .then((data) => {
      //array of data:
      // console.log(data)
      setBlogs(data);
      setisLoading(false) 
      setError(null);
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
      setisLoading(false);
    })
    console.log("useEffect runs");
  }, []);
  

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