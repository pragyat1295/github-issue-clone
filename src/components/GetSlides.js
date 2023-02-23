import React, { useState, useEffect } from "react";
import Scroll from "./Scroll";

// const API = 'https://api.github.com/repos/facebook/react/issues';




const GetSlides = (props) => {
  // const [page, setPage] = useState(1);
  // const API = `https://api.github.com/repos/facebook/react/issues?per_page=10&${page}`

  // const [data, setData] = useState();

  // useEffect(() => {
  //   async function getData() {
  //     const request = fetch(API);
  //     const response = await request;
  //     const parsed = await response.json();
  //     setData(parsed);
  //   }

  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (data === undefined) {
  //   return null;
  // }

  return (
    <div> 
        <Scroll 
        // data={data}
        />
      </div>  
  )

};

export default GetSlides;