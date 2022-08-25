import {useState, useEffect} from "react";
const useFetch = (url) =>{

  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    //ovan hjälper oss att avbryta fetchen om användern byter sida
    fetch(url, { signal: abortCont.signal })
    .then(res => {
      if(!res.ok){
        throw Error("Kunde inte ladda innehållet, prova att ladda om sidan, eller hör av dig till sidans administratör.") //*syns i console log
      }
      return res.json()
    })
    .then((data) => {
      setData(data);
      setisLoading(false) 
      setError(null);
    })
    .catch(error => {
      console.log(error.message)
    //? nedan handlar om att det blir error för att man avbryter fetch och updpaterar komponenten
      if (error.name === "AbortError"){
        console.log("Fetch was aborted")
      }
    //? nedan handlar om tex nätverksproblem och inte att man avbryter fetch
      setError(error.message)
      setisLoading(false);
    })
    console.log("useEffect runs");
    return () => abortCont.abort();
    //det här gör att vi pausar fetchen
  }, 
  [url]);
  return {data, isLoading, error}
}

export default useFetch;

//*custom hooks måste använda "use" först