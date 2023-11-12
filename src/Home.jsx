import React,{useState,useEffect} from 'react'

export default function Home() {
const[data,setData] = useState([])

useEffect(()=>{
    fetch(" http://localhost:4000/bots")
    .then((Response)=> Response.json())
    .then((news)=> setData(news))
    .catch((error)=> console.error("Something is off",error))
},[])
  return (
    <div>
        <h1>Welcome</h1>
        {
            data ? data.map((article,index)=>(
                <div key={index.id}>
                <p>Title:{article.name}</p>
                <img src={article.avatar_url} alt={article.name}/>
                </div>
            )) : <p>Loading, please wait</p>

        }
    </div>

  )
}
