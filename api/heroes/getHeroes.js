import fetch from "node-fetch";


const url="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d401b44dea1498441c907f9720457f43&hash=3b6d145bf3beaa3f11e22968f65bf749";
    const options={
      method:"GET",
   };
export default async function handler(req,res){
  const {data} = await fetch(url,options)
  .then((res)=>res.json())
  .catch((err)=>console.error("error:" + err));
  return res.json(data.results)
}                               