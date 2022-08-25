const Home = () => {

  const handleClick = (e) => {
    console.log("Yaaay you clicked", e)
  }

  const handleClickAgain = (name, e) => 
  {
    console.log("HELLO " + name, e.target)
  }

  return ( 
   <div className="home">
    <h2>Homepage</h2>
    <button onClick={handleClick}>Click me! Click meeee!</button>
    <button onClick={(e)=> 
      handleClickAgain("Tova", e)
    }>
      Click me again</button>
   </div>
   );
}
 
export default Home; <div className="home"></div>