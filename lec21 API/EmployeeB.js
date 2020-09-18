import React,{useState,useEffect} from 'react';


function EmployeeB(){
    const [hasError,setError]=useState(false);
    const [planets,setplanets]=useState({});
    
    

    useEffect(()=>{
        async function fetchData() {
            const res = await fetch("https://api.randomuser.me/");
            res
              .json()
              .then(res => setplanets(res))
              .catch(() => setError(false));
          }
        fetchData();
    },[]);

    
  return(
      <>
        <h1>Employee From Function Component</h1>
        <h3>Results : </h3>
        <span>{JSON.stringify(planets)}</span>
        <div>{JSON.stringify(hasError)}</div>
      </>
  )
}

export default EmployeeB;