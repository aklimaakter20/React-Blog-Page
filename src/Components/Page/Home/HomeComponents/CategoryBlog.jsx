import React from "react";

const CategoryBlog = ({ blogs, categoryId }) => {
  const filterBlogs = categoryId
    ? blogs.filter((blog) => blog.categoryId == categoryId)
    : blogs;
  return (
    <div>
      <div>
        {filterBlogs.map((blog) => (
          <div className="flex items-center gap-3 mb-4 border border-gray-300 rounded-md p-3">
            <img className="w-24 h-20 rounded-md" src={blog.image} alt="" />
            <div>
              <p className="text-sm font-semibold">{blog.title}</p>

              <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold">{blog.author}</p>
                <div>
                  {" "}
                  <button
                    className="text-xs px-2 py-1 rounded-sm cursor-pointer bg-[#FD5672] text-white"
                    onClick={() =>
                      document.getElementById(`modal_${blog.id}`).showModal()
                    }
                  >
                    View More
                  </button>
                  <dialog id={`modal_${blog.id}`} className="modal">
                    <div className="modal-box max-w-4xl h-fit">
                      <div>
                        <div className="flex gap-x-6">
                          <img
                            className="w-42 h-36 rounded-lg mb-4"
                            src={blog.image}
                            alt="Movie"
                          />
                          {/* PopBar */}
                          <div className="flex flex-col justify-between my-4 ">
                            <h2 className="card-title text-lg">{blog.title}</h2>
                            <div className="flex gap-6 text-gray-500">
                              <p className="font-semibold text-xs">
                                {blog.author}
                              </p>
                              <p className="font-semibold text-xs">
                                {blog.date}
                              </p>
                            </div>
                            <p className="text-gray-500 text-sm mb-3">
                              {blog.description}
                            </p>
                            <p className="text-gray-500 text-sm mb-3">
                              {blog.content}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex gap-x-4 text-xs font-semibold text-gray-500">
                                <p>Read Time : {blog.readingTime}</p>
                                <p>Total Views : {blog.views}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn bg-[#FD5672] text-white">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBlog;
