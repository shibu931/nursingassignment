import React, { useState } from 'react'
import BlogBanner from './BlogBanner'
import BlogCard from '../BlogCard'
import { Button } from 'bootstrap';


export default function Article() {
    const [blogData,setBlogData] = useState({})
    async function fetchData(){
        const response = await fetch("https://www.thestudenthelpline.co.in/api.php");
  const data = await response.json();
        setBlogData(data[0])
        console.log(data)
    }
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
        <button onClick={fetchData}>Call Api</button>
        <div className="container-xxl mt-10 mb-5">
        <div className="row">
            <div className="col-md-3 px-3">
                <div className="table-context">
                    <h2 className="fs-4 pe-3">Table Of Content</h2>
                    <ol className="ps-3">
                        <li><a href="" className="active">Learn About PTE Format</a></li>
                        <li><a href="">PTE Exam Guide - Learn</a></li>
                        <li><a href="">Established fact that a reader</a></li>
                        <li><a href="">Many desktop publishing</a></li>
                        <li><a href="">If you are going to use</a></li>
                        <li><a href="">Below for those interested</a></li>
                        <li><a href="">Always free form repetition</a></li>
                        <li><a href="">Learn About PTE Format</a></li>
                        <li><a href="">Chunks of Lorem Ipsum</a></li>
                    </ol>
                </div>
            </div>
            <div className="col-md-6 px-3">
                <div className="blog-header">
                    <h2 className="fs-4 fw-bolder mb-4">{blogData ? blogData.blog_title: "37 Best Content Creation Tools & Software in 2023"}</h2>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="info-orange px-4 py-2 rounded-pill">PUBLISHED BY ARTEM MINAEV</span>
                        <span className="info-green px-4 py-2 rounded-pill">UPDATED: APRIL 11th,2023</span>
                    </div>
                </div>
                <div className="blog-body mt-4">
                    {
                        blogData ? <div dangerouslySetInnerHTML={{ __html: blogData.blog_content }} />:
                        <>
                                                <img src="../assets/img/image6-1 3.png" width="100%" className="mb-4" alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quaerat vero unde. Quae
                        recusandae eligendi modi praesentium neque in nobis earum unde sequi eaque tempora repellendus,
                        dolores error totam repellat aliquid facilis saepe ipsam asperiores! Veritatis, enim? Nemo
                        laboriosam tenetur sequi accusantium sed, deserunt, amet molestias odio tempora pariatur sit
                        dicta, tempore temporibus? Ducimus quia quae vel consectetur excepturi?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ullam ipsum magnam, tempore
                        dicta, repellat illo minus ratione quasi tenetur molestias atque delectus rem odio veritatis
                        corrupti quo dolores repudiandae corporis, animi qui id dignissimos aspernatur totam! Iste,
                        fugiat aspernatur.</p>
                    <h2 className="fs-5 fw-bold">Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum atque repudiandae culpa ut
                        doloremque, pariatur voluptatibus odio reiciendis similique quaerat, perferendis ipsa est quia
                        at accusamus nemo veniam maiores nesciunt? Exercitationem ipsum hic blanditiis repellendus et
                        voluptatibus harum aut accusamus maiores iste. Accusamus asperiores, quas obcaecati unde
                        cupiditate quae doloribus quod consequuntur aperiam ut veniam, officia qui voluptatibus
                        accusantium inventore nihil sunt! Cum, laudantium! Mollitia ullam adipisci voluptatum commodi
                        similique fuga facere possimus necessitatibus sapiente perspiciatis quo ex rem, ut architecto
                        ipsam error iure itaque consequuntur nostrum odio qui? Adipisci laudantium quam fuga maiores
                        esse provident distinctio perferendis? Veritatis ullam id ipsa reiciendis, hic harum minus ut,
                        beatae voluptatem laborum explicabo necessitatibus blanditiis aut ipsum facilis </p>
                    <img src="../assets/img/image6-1 1.png" width="100%" className="mb-4" alt=""/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, perspiciatis molestiae? Dolore
                        incidunt eligendi, necessitatibus deserunt adipisci dicta culpa. Sequi suscipit voluptatibus
                        aspernatur libero atque! Laboriosam placeat nulla velit nemo, ducimus quis voluptatem animi?
                        Repellat ratione unde at facere temporibus ab qui, aliquid tenetur distinctio esse fugiat!
                        Minima eius amet non deserunt sapiente quod modi. Tempore veritatis fugit quisquam error aperiam
                        deserunt possimus autem consequuntur, nobis atque qui in maxime magnam, sit dolorum? Dolores
                        quas laboriosam at deserunt cupiditate delectus.</p>
                    <img src="../assets/img/image6-1 2.png" width="100%" className="mb-4" alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae ex, dolor ipsum iste vel
                        neque non ullam sit esse sunt, sed laudantium. Ipsam iusto vero voluptate error itaque
                        repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consectetur.
                        Quis consectetur sint esse! Porro! </p>
                        </>
                    }
                </div>
            </div>
            <div className="col-md-3 px-3">
                <div className="profile-box border rounded px-2 pb-5">
                    <div className="d-flex flex-column align-items-center pt-4">
                        <img src="../assets/img/Ellipse 1222.png" alt=""/>
                        <h2 className="fs-5 mt-3 fw-bold">Jamal Kamal</h2>
                        <p className="text-center text-secondary"><small>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Ipsum labore necessitatibus nulla assumenda impedit nisi</small></p>
                        <div>
                            <a href="#" className="text-secondary fs-5 me-3"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="text-secondary fs-5 me-3"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="text-secondary fs-5 me-3"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h2 className="fs-6 fw-bold">Article Status</h2>
                        <div className="d-flex justify-content-between text-secondary">
                            <p className="mb-2"><small>Monity traffic</small></p>
                            <p className="mb-2"><small>234</small></p>
                        </div>
                        <div className="d-flex justify-content-between text-secondary">
                            <p className="mb-2"><small>Linking website</small></p>
                            <p className="mb-2"><small>6435</small></p>
                        </div>
                        <div className="d-flex justify-content-between text-secondary">
                            <p className="mb-2"><small>Tweets</small></p>
                            <p className="mb-2"><small>123</small></p>
                        </div>
                        <h2 className="fs-6 fw-bold mt-3">Get Best Student Helpline Blog</h2>
                        <form action="" className="pb-5">
                            <input type="email" name="email" className="newsletter-input" placeholder="Enter your email"/>
                            <button type="submit"
                                className="d-block btn-gradient shadow-sm rounded px-4 py-2 my-3 w-100">Subscribe</button>
                        </form>
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
