import React, { useEffect, useState } from "react";
import axios from "axios";


const WorkOut = () =>{
const initialState = [];
const [workOutData, setWorkoutData] = useState(initialState);

useEffect(() =>{
console.log("call api");
axios
.get(`https://rickandmortyapi.com/api/character/`)
.then(response =>{
    console.log("response from api", response);
    setWorkoutData(response.data.results);
})
.catch(error => console.log(error));

},[])


return (
    <div className="halls">
    <h1>Hall of fame!</h1>
<ul>{workOutData.map(reps =><li key={reps.id}>{reps.name}</li>)}</ul>
</div>


)

}

export default WorkOut;