import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
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
      {blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>Författare: {item.author}</p>
        </div>
      ))}
    </div>
    );
}

export default Home; 