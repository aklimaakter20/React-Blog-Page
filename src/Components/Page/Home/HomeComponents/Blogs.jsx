import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({blogs}) => {
  return (
    <div>
     <div>
      {
       blogs.map(blog => <BlogCard blog={blog} />)
      }
     </div>
    </div>
  )
}

export default Blogs
