import React from 'react'

const CategoryBlog = ({blogs,categoryId}) => {
    const filterBlogs = categoryId ? blogs.filter(blog=>blog.categoryId == categoryId): blogs
  return (
    <div>
     <div>
        {
            filterBlogs.map(blog =>(
                <div className='flex items-center gap-3 mb-4 border border-gray-300 rounded-md p-3'>
                    <img className='w-24 h-20 rounded-md' src={blog.image} alt="" />
                    <div>
                        <p className='text-sm font-semibold'>{blog.title}</p>
                        <p className='text-xs'>{blog.description}</p>
                    </div>
                    
                </div>
            ))
        }
     </div>
    </div>
  )
}

export default CategoryBlog
