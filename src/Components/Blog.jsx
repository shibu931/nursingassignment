import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Blog() {
    const options = {
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            600: {
                items: 2,
                margin: 10
            },
            1000: {
                items: 3,
                margin: 10
            },
            1200: {
                margin: 40,
            }
        }
    };
    const blogs = [
        {
            id: 1,
            title: "Inappropriate Referencing",
            content: "Sources and citations must always be appropriately addressed in a nursing assignment.The hypothesis and ideas presented in the assignment must be supported by evidence.Finding a reliable reference might",
            image: "blog1",
            titleColor: "text-success"
        },
        {
            id: 2,
            title: "Using Erroneous Terminology",
            content: "In all of their work, students should adhere to a standard of nursing terminology. The reader must be able to tell whether the student comprehends the topics by the use of appropriate nursing terminologies. Thus, their",
            image: "blog2",
            titleColor: "text-warning"
        },
        {
            id: 3,
            title: "Scant Evidence",
            content: "All of your research must be backed up by evidence. When there is proof of the study, your nursing assignment work will be regarded as professionally and academically excellent. Your ideas have to be supported byLearn more....",
            image: "blog3",
            titleColor: "text-primary"
        },
    ]
    return (
        <>
            <div className="container mt-5" id='blog'>
                <div className="title pb-4 pt-0 pt-md-4 ">
                    <h2 className='fw-bold pe-2 pe-lg-5 mb-4'>We'll Cover A Few Of The <span className='text-primary'>Challenges Nursing</span> Students Encounter While Completing Nursing Assignments Canada And Australia</h2>
                </div>
                <OwlCarousel className='owl-theme' {...options}>
                    {
                        blogs.map((data) => (
                            <div className="blog-card" key={data.id}>
                                <img src={`./assets/img/${data.image}.webp`} alt="" />
                                <div className='p-3 p-md-4'>
                                    <h2 className={`fw-600 fs-4 ${data.titleColor}`}>{data.title}</h2>
                                    <p className='text-secondary'>{data.content}
                                        <a href="" className='fw-600 text-dark text-decoration-none'> Learn more...</a></p>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </>
    )
}
