import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title= props.title;
  // const handleDelete = props.handleDelete;
  // console.log(props, blogs, title)

  return ( <div className="blog-list">
    <h2>{title}</h2>
    {blogs.map((item) => (
        <div className="blog-preview" 
        key={item.id}>
          <Link to={`/blogs/${item.id}`}>
          <h2 className="all-blogs">{item.title}</h2>
          <p>Författare:  {item.author}</p>
          </Link>
        </div>
      ))}
  </div>  );
}

export default BlogList;