// import {useState,useEffect} from 'react';

// const useFetch = (url) =>{
   
//     const[data,setData]=useState(null);
//     const[name,setName]=useState('Smile');
//     const[isPending,setIsPending]=useState(true);
//     const[error,setError]=useState(null);
//     useEffect(() => {
//         const abortCont = new AbortController();
//         setTimeout(()=>{
//             fetch(url,{signal:abortCont.signal})
//         .then(res => {
//             if(!res.ok){
//                 throw Error('could not fetch the data for that resource');
//             }
//             return res.json();
//         })
//         .then(data =>{
//             setIsPending(false);
//            setData(data);
//            setError(null);
//         })
//         .catch(err=>{
//             if(err.name === 'AbortError'){
//                 console.log('fetch aborted')
//             } 
//             // console.log(err.message);
//             else{
//                 setIsPending(false);
//                 setError(err.message);
//             }     
//         },1000)
//         });
//         return () => abortCont.abort();
//     },[url]);
//     return {data,name,isPending,error}
// }

// export default useFetch;
// useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
