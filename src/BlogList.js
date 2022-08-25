const BlogList = (props) => {
  const blogs = props.blogs;
  const title= props.title;
  console.log(props, blogs, title)

  return ( <div className="blog-list">
    <h2>{title}</h2>
    {blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>Författare:  {item.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Ta bort</button>
        </div>
      ))}
  </div>  );
}
 
export default BlogList;