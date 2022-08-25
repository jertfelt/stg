import {useState, useEffect} from "react";


const useFetch = (url) =>{

  const [data, setData] = useState(null);
  //ändrade från blogs till data så det går att återanvända!
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    //ändrade till url så vi kan fetcha olika
    .then(res => {
      // console.log(res)
      //ok: true fetch is ok, we get data back
      if(!res.ok){
        throw Error("Kunde inte ladda innehållet, prova att refresha hemsidan, eller hör av dig till sidans administratör.") //*syns i console log
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
      setError(error.message)
      setisLoading(false);
    })
    console.log("useEffect runs");
  }, [url]);

  //return kan vara array, objekt, boolean m.m.
  return {data, isLoading, error}
}

export default useFetch;

//*custom hooks måste använda "use" först