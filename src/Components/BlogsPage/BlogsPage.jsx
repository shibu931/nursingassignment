import React, { useState } from 'react'
import BlogCard from '../BlogCard'
import { Link } from 'react-router-dom'
import BlogBanner from './BlogBanner'

export default function BlogsPage() {
    
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
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6 px-3 mb-5 mb-lg-0">
                        <img src="https://picsum.photos/800/450" className='img-fluid rounded' alt="" />
                        <h2 className='fw-bold fs-3 text-primary ms-1 mt-3'>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex sint sunt atque nemo. Obcaecati cum dolore totam corporis ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatem iure in expedita laboriosam suscipit explicabo sapiente velit veritatis incidunt?</p>
                        <span className='bg-warning bg-opacity-10 px-3 py-2 rounded-pill me-3'><span className='text-warning'>Published By</span></span>
                        <span className='bg-success bg-opacity-10 px-3 py-2 rounded-pill'><span className='text-success'>DATE 12 AUG 2023</span></span>
                    </div>
                    <div className="col-lg-6">
                        <h4 className='fw-thin'>Featured Article</h4>
                        <div className="row gap-3">
                            <div className="col-12 ps-2 pe-3 ps-sm-2 pe-sm-2 feature-box">
                                <div className="d-flex p-2 border rounded">
                                    <img src="https://picsum.photos/120/120" className='rounded' alt="" />
                                    <div className='ms-3'>
                                        <p className='mb-0 mb-sm-1 fs-5 lh-sm wrap-text wrap-text-2 font-poppins'><Link to="" className='text-decoration-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, autem.</Link></p>
                                        <p className='mb-0 wrap-text wrap-text-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni perferendis quos veniam, ipsam obcaecati, aut porro vero vel quis fugit </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 ps-2 pe-3 ps-sm-2 pe-sm-2 feature-box">
                                <div className="d-flex p-2 border rounded">
                                    <img src="https://picsum.photos/120/120" className='rounded' alt="" />
                                    <div className='ms-3'>
                                        <p className='mb-0 mb-sm-1 fs-5 lh-sm wrap-text wrap-text-2 font-poppins'><Link to="" className='text-decoration-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, autem.</Link></p>
                                        <p className='mb-0 wrap-text wrap-text-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni perferendis quos veniam, ipsam obcaecati, aut porro vero vel quis fugit </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 ps-2 pe-3 ps-sm-2 pe-sm-2 feature-box">
                                <div className="d-flex p-2 border rounded">
                                    <img src="https://picsum.photos/120/120" className='rounded' alt="" />
                                    <div className='ms-3'>
                                        <p className='mb-0 mb-sm-1 fs-5 lh-sm wrap-text wrap-text-2 font-poppins'><Link to="" className='text-decoration-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, autem.</Link></p>
                                        <p className='mb-0 wrap-text wrap-text-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni perferendis quos veniam, ipsam obcaecati, aut porro vero vel quis fugit </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other-articles pt-5">
                <section className="blog">
                    <div className="container">
                        <h2 className="fs-1 fw-bold mb-4">Latest Articles</h2>
                        <div className="blogs-container">
                            <div className="row">
                            {
                                blogs.map((item, index) => (
                                    <div className='col-lg-4' key={index}>
                                        <BlogCard data={item}/>
                                    </div>
                                ))
                            }
                            </div>
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
