import React from 'react'

const Category = ({categories,handleCategoryId}) => {
  return (
    <div className='py-12 flex gap-2 flex-wrap '>
      {
        categories.map(category => (
          <div className='border border-gray-200 px-4 py-2'>
            <p onClick={() => handleCategoryId(category.id)} className='text-sm cursor-pointer'>{category.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Category
