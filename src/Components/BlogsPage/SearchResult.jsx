import React from 'react'
import BlogCard from '../BlogCard'
import BlogBanner from './BlogBanner'

export default function SearchResult() {
  const blogs = [
    {
        id: 1,
        title: "Inappropriate Referencing",
        content: "Sources and citations must always be appropriately addressed in a nursing assignment.The hypothesis and ideas presented in the assignment must be supported by evidence.Finding a reliable reference might",
        image: "blog1",
        titleColor: "text-success",
        link: "/article"
    },
    {
        id: 2,
        title: "Using Erroneous Terminology",
        content: "In all of their work, students should adhere to a standard of nursing terminology. The reader must be able to tell whether the student comprehends the topics by the use of appropriate nursing terminologies. Thus, their",
        image: "blog2",
        titleColor: "text-warning",
        link: "/article"
    },
    {
        id: 3,
        title: "Scant Evidence",
        content: "All of your research must be backed up by evidence. When there is proof of the study, your nursing assignment work will be regarded as professionally and academically excellent. Your ideas have to be supported by",
        image: "blog3",
        titleColor: "text-primary",
        link: "/article"
    },
    {
        id: 1,
        title: "Inappropriate Referencing",
        content: "Sources and citations must always be appropriately addressed in a nursing assignment.The hypothesis and ideas presented in the assignment must be supported by evidence.Finding a reliable reference might",
        image: "blog1",
        titleColor: "text-success",
        link: "/article"
    },
    {
        id: 2,
        title: "Using Erroneous Terminology",
        content: "In all of their work, students should adhere to a standard of nursing terminology. The reader must be able to tell whether the student comprehends the topics by the use of appropriate nursing terminologies. Thus, their",
        image: "blog2",
        titleColor: "text-warning",
        link: "/article"
    },
    {
        id: 3,
        title: "Scant Evidence",
        content: "All of your research must be backed up by evidence. When there is proof of the study, your nursing assignment work will be regarded as professionally and academically excellent. Your ideas have to be supported by",
        image: "blog3",
        titleColor: "text-primary",
        link: "/article"
    },
    {
        id: 1,
        title: "Inappropriate Referencing",
        content: "Sources and citations must always be appropriately addressed in a nursing assignment.The hypothesis and ideas presented in the assignment must be supported by evidence.Finding a reliable reference might",
        image: "blog1",
        titleColor: "text-success",
        link: "/article"
    },
    {
        id: 2,
        title: "Using Erroneous Terminology",
        content: "In all of their work, students should adhere to a standard of nursing terminology. The reader must be able to tell whether the student comprehends the topics by the use of appropriate nursing terminologies. Thus, their",
        image: "blog2",
        titleColor: "text-warning",
        link: "/article"
    },
    {
        id: 3,
        title: "Scant Evidence",
        content: "All of your research must be backed up by evidence. When there is proof of the study, your nursing assignment work will be regarded as professionally and academically excellent. Your ideas have to be supported by",
        image: "blog3",
        titleColor: "text-primary",
        link: "/article"
    },
]
  return (
<>
    <BlogBanner/>
    <div className="other-articles pt-5">
      <section className="blog">
        <div className="container">
          <div className="blogs-container">
            {
              blogs.map((item, index) => (
                <div className='col-lg-4' key={index}>
                  <BlogCard data={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center w-100 mb-4">
        <button className="btn btn-success btn-main py-3 ps-3 pe-5 rounded-pill ">SEE MORE ARTICLE
        </button>
      </div>
    </div>
</>
  )
}
