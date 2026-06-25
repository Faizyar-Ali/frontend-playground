import { useState } from "react";

function User({name}:{name:string}){
  const [age,setAge]=useState(10);
  return <>
        <h1>{name} is {age} year old </h1>      
        <button onClick={()=>setAge(age+1)}>Increase Age</button>
        </>
}
function App() {
  return (
    <div>
      <User />
    </div>
  );
}

export default App;