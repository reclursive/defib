
import { useState } from "react";
import axios from "axios";
import Articles from "./articles";
// import data from "../../../dummy.json";

const API_KEY = "4d619a9df3034c96887714d712fc13ff"
//timer has hook so not continuous

function debounce(func, timeout = 8000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
const Search = () => {
    const [KW, setKW] = useState("");
    const [articles, setArticles] = useState([]);

    const autoComplete = async (event) =>{
        const value = event.target.value
        setKW(value)
        console.log(KW, value)
        const res = await req()
        setArticles(res.articles)
        // const db = debounce(()=>{console.log("hi")})
        // db()
        
    }   
    const req = async (newVal) =>{
        //url fetch for later/final
        console.log(KW)
        const url = `https://newsapi.org/v2/everything?q=${KW}&apiKey=${API_KEY}`
        const res = await axios.get(url)
        console.log(res.data)
        return res.data
    }
    
    return (
        <div>
            <input value={KW} onChange={autoComplete}/>
            <Articles articles={articles}/>
        </div>

    )


}

export default Search



