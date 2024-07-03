import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    
  return (
    <div className='mx-12 my-12 py-10'>
        <Header/>
        <div>
            <button onClick={() => navigation(-1)} className='outline'>
                back
            </button>
            <h2>
                Blogs Tagged <span className='outline'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage