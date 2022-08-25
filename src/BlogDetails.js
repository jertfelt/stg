import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDeleteButt = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    })
    
  }

  return ( 
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="blog-author">{blog.author}</p>
          <div><p>{blog.body}</p></div>
          <button onClick={handleDeleteButt}>Ta bort</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;