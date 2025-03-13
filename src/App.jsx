import axios from "axios";
import { useState } from "react";

export default function App(){
  const[result,setResult] = useState(null)
  if(result == null)
  axios.get("https://open-weather13.p.rapidapi.com/city/Kurnool/EN",{
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-rapidapi-ua' : 'RapidAPI-Playground',
      'x-rapidapi-key' : '1b2e8cebb1msh9bd3a6c17370135p103e91jsn1623b4132e38',
      'x-rapidapi-host' : 'open-weather13.p.rapidapi.com'
    }
  })
  .then((Res)=>{
    setResult(Res.data.main.temp)
    console.log(result)
  } )
  if(result==null)
  return (
    <div>
       App Display
       <br/> <br/>
       Data is fetching........
    </div>
  )
  else
  return(
    <div>
     <h1>Kurnool Temp is : {result}</h1> 
    </div>
  );

}
