import { Link } from "react-router-dom";

const NotFound = () => {
  return ( <div className="not-found">
    <h2>Sorry!</h2>
    <p>Den här sidan finns inte</p>
    <Link to="/"> Gå tillbaka till start!</Link>

  </div> );
}
 
export default NotFound;