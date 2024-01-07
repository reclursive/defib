
import { useState } from "react";
import axios from "axios";
import Articles from "./articles";
import data from "../../../dummy.json";

const API_KEY = "4d619a9df3034c96887714d712fc13ff"
//timer has hook so not continuous

// function debounce(func, timeout = 300){
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
const Search = () => {
    const [KW, setKW] = useState("");
    const [articles, setArticles] = useState([]);
    const movie =  {
        title: "Titanic",
    }

    const autoComplete = async (event) =>{
        const value = event.target.value
        setKW(value)
        console.log(KW, value)
        const data = await req()
        setArticles(data.articles)
        // const db = debounce(()=>{console.log("hi")})
        // db()
        
    }   
    const req = async (newVal) =>{
        //url fetch for later/final
        // const url = `https://newsapi.org/v2/everything?q=${newVal}&apiKey=${API_KEY}`
        // const res = await axios.get(url)
        return data
    }
    
    return (
        <div>
            <input value={KW} onChange={autoComplete}/>
            <Articles articles={articles}/>
        </div>

    )


}

export default Search



