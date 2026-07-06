import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({blogs}) => {
  const sortBlogs = [...blogs].sort((a,b) => b.views - a.views)
  return (
    <div>
     <div>
      {
       sortBlogs.map(blog => <BlogCard blog={blog} />)
      }
     </div>
    </div>
  )
}

export default Blogs
