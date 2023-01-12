import React, {useState} from 'react';
import { Post } from './Post';
import { BsRecordCircle } from "react-icons/bs";

export default function Scroll({data}) {

    const [initialLength, setInitialLength] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [posts, setPosts] = useState([...data.slice(initialLength,postsPerPage)]); 

    // let postNumber = postsPerPage;
    const [postNumber, setPostNumber] = useState(postsPerPage); 
    // console.log(data.length)
  
  function handleScroll() { 
    
    let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
    
    if (isAtBottom) { 
      
      // Load next posts
      setInitialLength(initialLength + postsPerPage); 
  
        setPostNumber(postNumber + postsPerPage);

    //   console.log('final length' ,postNumber);

      if(postNumber <= data.length) {
        setPosts([...posts, ...data.slice(initialLength,postNumber)]);
      }
      
      
      
    } 
    
  } 

  
  window.addEventListener('scroll', handleScroll);




  return (
    <div className = 'page_layout'>

        <div className='top_bar row' style = {{margin: '0% 0.1%'}}>
           <div className = 'col-12 col-lg-2 top_bar_text'>
              <BsRecordCircle /> {data.length} Open 
            </div> 

            <div className = 'col-12 col-lg-9 top_bar_text'>
                <div className = 'row ' >
                    <div className = 'col-2'>
                        Author
                    </div>
                    <div className = 'col-2'>Label</div>
                    <div className = 'col-2 d-none d-md-block'>Projects</div>
                    <div className = 'col-2 d-none d-md-block'>Milestones</div>
                    <div className = 'col-2 '>Assignee</div>
                    <div className = 'col-2'>Sort</div>
                </div>
            </div>
        </div>
        { posts.map((item, i) => {
          return (
            <div key={i}> 
              <Post data= {item} /> 
            </div>
          )
        } 
           
        )} 
    </div>
  )
}
