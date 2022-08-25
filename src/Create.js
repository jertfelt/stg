import { useState } from "react";
import { useHistory} from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tova");
  const [isPending, setIsPending] = useState(false);
  //till för att klicka fram och tillbaka
  const history = useHistory();

  const handleSubmit = (e) => {
    //*default action: to prevent refresh:
    e.preventDefault();
    //*skapa en blogg:
    const blog = {title, body, author};
    // console.log(blog)
    setIsPending(true);
    // vi lägger POST request här pga vi kommer bara använda det en gång på hela hemsidan, annars kan man göra som med useFetch
    //url + second argument:
    //second argument är att vi berättar att vi gör en POST och vi berättar att vi skickar JSON
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog) //här omvandlar vi då JSON till en string
    }).then(() => {
      console.log("New blog added")
      setIsPending(false)
      // history.go(-1); //går tillbaka till sidan vi nyss var på
      history.push("/") //går till startsidan
    })    
  }

  return ( 
    <div className="create">
      <h2>Skriv en ny blogg!</h2>
      <form onSubmit={handleSubmit}> 
        <label>Titel:</label>
        <input 
        type="text"
        required
        value= {title}
        onChange={(e) =>  setTitle(e.target.value)} />
        <label>Inlägg:</label>
        <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required>
        </textarea>
        <label>Författare:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}>
          <option value="Tova">Tova</option>
          <option value="Oskar">Oskar</option>
          <option value="Daniel">Daniel</option>
          <option value="Jonas">Jonas</option>
        </select>
        {!isPending && <button>Lägg till</button>}
        {isPending && <button disabled>Lägger till..</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
   );
}
 
export default Create;