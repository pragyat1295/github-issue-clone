import React, { useState, useEffect } from 'react';
import { Post } from './Post';
import { BsRecordCircle } from "react-icons/bs";

export default function Scroll({  }) {

  const [initialLength, setInitialLength] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // const [posts, setPosts] = useState([...data.slice(initialLength, postsPerPage)]);

  const [page, setPage] = useState(1);
  const API = `https://api.github.com/repos/facebook/react/issues?per_page=10&${page}`;
  const [data, setData] = useState();

  async function getData() {
    const request = fetch(API);
    const response = await request;
    const parsed = await response.json();
    setData(parsed);
  }

  useEffect(() => {
    

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const [posts, setPosts] = useState([...data.slice(initialLength, postsPerPage)]);
  const [posts, setPosts] = useState(data);

  // let postNumber = postsPerPage;
  const [postNumber, setPostNumber] = useState(postsPerPage);
  // console.log(data.length)

  function handleScroll() {

    let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 

    // let isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
    // let isAtBottom = document.documentElement.scrollHeight <= document.documentElement.clientHeight + document.documentElement.scrollTop;
    if (isAtBottom) {

      // Load next posts
      // setInitialLength(initialLength + postsPerPage);

      // setPostNumber(postNumber + postsPerPage);

      setPage(page+1);
      
      getData();
      //   console.log('final length' ,postNumber);

      // if (postNumber <= data.length) {
      //   // setPosts([...posts, ...data.slice(initialLength, postNumber)]);
      //   setPosts([...data])
      // }



    }

  }

  useEffect(() => window.addEventListener('scroll', handleScroll))







  return (
    <div className='page_layout'>

      <div className='top_bar row' style={{ margin: '0% 0.1%' }}>
        <div className='col-12 col-lg-2 top_bar_text'>
          <BsRecordCircle /> {data.length} Open
        </div>

        <div className='col-12 col-lg-9 top_bar_text'>
          <div className='row ' >
            <div className='col-2'>
              Author
            </div>
            <div className='col-2'>Label</div>
            <div className='col-2 d-none d-md-block'>Projects</div>
            <div className='col-2 d-none d-md-block'>Milestones</div>
            <div className='col-2 '>Assignee</div>
            <div className='col-2'>Sort</div>
          </div>
        </div>
      </div>
      {posts.map((item, i) => {
        return (
          <div key={i}>
            <Post data={item} />
          </div>
        )
      }

      )}
    </div>
  )
}
