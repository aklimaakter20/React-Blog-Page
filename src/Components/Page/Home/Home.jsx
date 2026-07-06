import React, { useEffect, useState } from 'react'
import Blogs from './HomeComponents/Blogs'
import Category from './HomeComponents/Category'
import CategoryBlog from './HomeComponents/CategoryBlog'
const Home = () => {


  const [blogs, setBlogs] = useState([])
  const [categories,setCategories] = useState([])
  const [categoryId, setCategoryId] = useState()
  useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data=>setBlogs(data))
  },[])
 
  useEffect(()=>{
    fetch("category.json")
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  const handleCategoryId = (id)=>{
    setCategoryId(id);
  }
  return (
    <div className='container px-24 mx-auto'>

     <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-8'>
        <Blogs blogs={blogs} />
      </div>
      
      <div className='col-span-4'>
        <Category categories={categories} handleCategoryId={handleCategoryId} />
        <CategoryBlog categoryId={categoryId} blogs = {blogs} />
      </div>
     </div>
    </div>
  )
}

export default Home
