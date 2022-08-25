const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>STG SPELAR SPEL</h1>
      <div className="links">
        <a href="/">Start</a>
        <a href="/create" style={{
          color: "black", 
          backgroundColor: "cadetblue",
          borderRadius: "8px"
        }}>
          Ny blogg</a>
      </div>
    </nav>
  );
}
 
export default Navbar;

