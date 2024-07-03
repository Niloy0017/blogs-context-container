import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='mx-12 my-12 py-10'>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)} className='outline'>
            Back
        </button>
        <h2> 
            Blogs on <span className='outline'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage