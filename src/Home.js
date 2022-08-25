const Home = () => {

  const handleClick = () => {
    console.log("Yaaay you clicked")
  }

  return ( 
   <div className="home">
    <h2>Homepage</h2>
    <button onClick={handleClick}>Click me! Click meeee!</button>
   </div>
   );
}
 
export default Home; <div className="home"></div>