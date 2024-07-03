import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className=' mx-12 my-12 py-10'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home;