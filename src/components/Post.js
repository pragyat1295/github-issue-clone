import React from 'react'; 
import { BsRecordCircle  } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";


const Post = ({data}) => { 
  
  return ( 
    
    <div className = 'post_display' 
    // style = {{border: '1px solid black', margin: '1%'}}
    > 
    
      <div className = 'row'>
        {/* ----------- Details ------------- */}
        <div className = 'col-12 col-md-10'>
            <div className = 'link_tags_layout'>
              
                
                <a className = 'issue_link' href= '#' style = {{ marginTop: '1%', }}>
                <BsRecordCircle className='circle_prop'  /> {data.title} 
                </a>
              
                {/* <br/> */}
            
                {data.labels.map((item) => {
                    return (
                        <span key = {item.id} className = 'data_lables'
                            style = {{
                            backgroundColor: '#'+item.color,}}>
                            {item.name}
                        </span>
                    )
                })}
            
            
            </div>
        </div>

        {/* ------------------- Avatars ----------- */}

        <div className = 'col-md-2 d-none d-md-block'>

            <div className = 'row'>
                <div className = 'col-6'>
                    <img src = {data.user.avatar_url} alt = {data.user.login} 
                    key = {data.user.id} 
                    style = {{height: '4vh', width: '4vh', borderRadius: '50%'}}/>
                </div>
                <div className = 'col-6'>
                    {
                        data.comments !== 0 ? <div> <FiMessageSquare/> {data.comments} </div> : null
                    }
                </div>
            </div>
            
        </div>
      </div>

      <div style = {{color: 'gray'}}>
        <span> #{data.number} opened by {data.user.login} </span>
      </div>
      
      
 
      
    </div> 
    
  ); 
  
}; 

export {Post};