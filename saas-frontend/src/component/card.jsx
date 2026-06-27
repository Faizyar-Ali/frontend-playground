import React from 'react'
import { Bookmark} from 'lucide-react';


function Card({company,logo_url,postedAgo,title,jobType,salary,location}){
  return (

    <div className="card">

      <div className='top'>
      <img src={logo_url} alt="image"/>
      <button>save<Bookmark size={18} color='#a0a0a0'/> </button>
      </div>

      <div className="centre">
      <h3>{company}<span>{postedAgo}</span> </h3>
      <h2>{title}</h2>
      {jobType.map(function(elem){
         return <h4>{elem}</h4>
      })}
      </div>

      <div className="bottom">
          <div>
            <h3>{salary}</h3>
            <p>{location}</p>
        </div>
          <button>Apply Now</button>
      </div>

    </div>
  )
}

export default Card