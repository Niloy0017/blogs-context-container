import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
  return (
    <div className='mt-[50px] outline flex flex-col gap-2'>

      <NavLink to={`/blog/${post.id}`} className="outline">
        <span className='font-bold'>{post.title}</span>
      </NavLink>

      <p>
        <span>By </span>
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="outline">
          <span>{post.category}</span>
        </NavLink>
      </p>

      <p> Posted on {post.date} </p>
      <p> {post.content} </p>

      <div className='flex gap-6'>
        {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="outline">
              <span>{`#${tag} `}</span>
            </NavLink>
        ))}
      </div>

    </div>
  )
}

export default BlogDetails