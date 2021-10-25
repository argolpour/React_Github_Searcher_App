import { useContext, useState } from "react";
import githubContext from "../context/github/githubContext";
import './Searchform.css';

const Serachform = () => {
const {fetchData,users,clearAll}=useContext(githubContext)
const [searchvalue, setSearchvalue] = useState("");
// const [error, setError] = useState(null)
const submitHandler=()=>{
    if (searchvalue) {
        fetchData(searchvalue);
        setSearchvalue("");
    }
   
}


    return (
        
        <div className="form">
            {/* {error && <h3>{error}</h3>} */}
            <input type="search" placeholder="Enter Name...."  value={searchvalue} onChange={(e)=>setSearchvalue(e.target.value)}/>
            <button className="btn btn-primary btn-block" onClick={()=>{submitHandler()}}>Search</button>
             {users.length>0 && <button className="btn btn-success btn-block" onClick={()=>{clearAll()}}>Clear All</button>}
            
        </div>
    )
}

export default Serachform
