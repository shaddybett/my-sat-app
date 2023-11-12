import React,{useState,useEffect} from 'react'

export default function Home() {
const[data,setData] = useState([])

useEffect(()=>{
    fetch(" http://localhost:4001/articles")
    .then((Response)=> Response.json())
    .then((news)=> setData(news))
    .catch((error)=> console.error("Something is off",error))
},[])
  return (
    <div>
        <h1>Welcome</h1>
        {
            data ? data.map((article)=>(
                <div key={article.id}>
                <p>Title:{article.title}</p>
                <img src={article.urlToImage} alt={article.title}/>
                </div>
            )) : <p>Loading, please wait</p>

        }
    </div>

  )
}
