import {Link} from "react-router-dom";


const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>STG SPELAR SPEL</h1>
      <div className="links">
        <Link to ="/">Start</Link>
        <Link to ="/create" 
        style={{
          color: "black", 
          backgroundColor: "cadetblue",
          borderRadius: "8px"
        }}>
          Ny blogg</Link>
      </div>
    </nav>
  );
}
export default Navbar;

