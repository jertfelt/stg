import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tova");

  return ( 
    <div className="create">
      <h2>Skriv en ny blogg!</h2>
      <form>
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
        <button>Lägg till</button>
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
   );
}
 
export default Create;