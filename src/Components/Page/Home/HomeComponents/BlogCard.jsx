import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="py-12 border border-gray-300 px-5 my-4 rounded-md">
      <div className="flex gap-x-6">
        <img
          className="w-42 h-36 rounded-lg mb-4"
          src={blog.image}
          alt="Movie"
        />

        <div className="flex flex-col justify-between my-4">
          <h2 className="card-title text-lg">{blog.title}</h2>
          <div className="flex gap-6 text-gray-500">
            <p className="font-semibold text-xs">{blog.author}</p>
            <p className="font-semibold text-xs">{blog.date}</p>
          </div>
          <p className="text-gray-500">{blog.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-4 text-xs font-semibold text-gray-500">
              <p>Read Time : {blog.readingTime}</p>
              <p>Total Views : {blog.views}</p>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
           <div>
             <button
              className="btn bg-[#FD5672] text-white"
              onClick={() => document.getElementById(`modal_${blog.id}`).showModal()}
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
                        <p className="font-semibold text-xs">{blog.author}</p>
                        <p className="font-semibold text-xs">{blog.date}</p>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">{blog.description}</p>
                      <p className="text-gray-500 text-sm mb-3">{blog.content}</p>
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
                    <button className="btn bg-[#FD5672] text-white">Close</button>
                  </form>
                </div>
              </div>
            </dialog>{" "}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
