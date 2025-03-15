import React,{useState} from "react";
import "./Dictionary.css";
export default function Dictionary(){
    let [keyword, setkeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert('searching for ${keyword} definition');
    }
function handlekeywordchange(event){
    setkeyword(event.target.value);
}
  return(
    <div className="Dictionary">
    <form onSubmit={search} > 
        <input type="search" onchange= {handlekeywordchange}/>
    </form>
    </div>
  )  
}
